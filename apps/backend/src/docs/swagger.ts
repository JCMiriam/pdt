const swaggerJsdoc = require('swagger-jsdoc');
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'PDT API',
        version: '1.0.0',
        description: 'API documentation for the turn-based card game PDT 🃏',
        },
    },
    apis: ['../**/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwaggerDocs = (app: Express) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`📄 Swagger docs available at http://localhost:4000/api/docs`);
};
