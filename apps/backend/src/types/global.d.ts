declare module 'swagger-jsdoc' {
    export interface SwaggerJsdocOptions {
        definition: object;
        apis: string[];
    }

    export default function swaggerJSDoc(options: SwaggerJsdocOptions): object;
}
