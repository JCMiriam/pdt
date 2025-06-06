from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route("/")
def index():
    return "✅ Backend funcionando correctamente."

if __name__ == "__main__":
    socketio.run(app, debug=True)
