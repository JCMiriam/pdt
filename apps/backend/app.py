# Este código implementa un sistema de salas de juego usando WebSockets con FastAPI. 
# Cada sala tiene una contraseña, y los clientes deben conocerla para unirse. 
# Al conectarse, los clientes pueden iniciar el juego (start_game) o jugar una carta (play_card). 
# El estado del juego se sincroniza entre todos los jugadores en tiempo real. 
# Además, cuando un cliente se desconecta, se elimina de la sala.

from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Query
from typing import Dict

# Inicializa la aplicación FastAPI
app = FastAPI()

# Diccionario para almacenar las salas activas
# Cada sala contiene contraseña, clientes conectados, turno actual y estado del juego
rooms: Dict[str, dict] = {}

# Endpoint WebSocket que gestiona las conexiones por sala
@app.websocket("/ws/{room_id}")
async def websocket_endpoint(websocket: WebSocket, room_id: str, password: str = Query(...)):
    await websocket.accept()  # Acepta la conexión del cliente

    # Si la sala no existe, se crea con los datos iniciales
    if room_id not in rooms:
        rooms[room_id] = {
            "password": password,
            "clients": [websocket],
            "turn": 0,
            "state": {}
        }
        await websocket.send_json({"type": "info", "message": f"Sala {room_id} creada."})
    else:
        # Si la sala ya existe, se verifica la contraseña
        if rooms[room_id]["password"] != password:
            await websocket.send_json({"type": "error", "message": "Contraseña incorrecta."})
            await websocket.close()
            return
        # Si la contraseña es correcta, se añade el cliente a la sala
        rooms[room_id]["clients"].append(websocket)
        await websocket.send_json({"type": "info", "message": f"Unido a sala {room_id}."})

    try:
        # Escucha mensajes entrantes del cliente
        while True:
            data = await websocket.receive_json()
            action = data.get("action")  # Acción enviada por el cliente

            if action == "start_game":
                # Inicializa el estado del juego
                rooms[room_id]["state"] = {
                    "message": "Juego iniciado",
                    "currentTurn": 0
                }
                # Envía el estado inicial a todos los clientes de la sala
                for client in rooms[room_id]["clients"]:
                    await client.send_json({"type": "game_started", "state": rooms[room_id]["state"]})

            elif action == "play_card":
                # Jugador juega una carta
                card = data.get("card")
                room = rooms[room_id]
                room["state"]["lastCard"] = card  # Guarda la última carta jugada
                room["turn"] = (room["turn"] + 1) % len(room["clients"])  # Cambia el turno al siguiente jugador
                room["state"]["currentTurn"] = room["turn"]  # Actualiza el turno en el estado

                # Envía el nuevo estado del juego a todos los clientes
                for client in room["clients"]:
                    await client.send_json({"type": "game_state", "state": room["state"]})

    except WebSocketDisconnect:
        # Si un cliente se desconecta, se elimina de la sala
        rooms[room_id]["clients"].remove(websocket)
