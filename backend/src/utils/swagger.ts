import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Aiko Personalisation MS",
      version: "0.0.1",
      description: "OpenAPI documentation for the Aiko Personalisation Microservice",
    },
    swagger: `http://localhost:${process.env.PORT || 8000}/api/docs/json`,
    externalDocs: {
      url: `http://localhost:${process.env.PORT || 8000}/api/docs/json`,
      description: "OpenAPI - JSON",
    },
    tags: [
      {
        name: "Health Check",
        description: "Endpoints to check the health of the Feedback-MS",
      },
    ],
  },
  apis: ["**/*.ts", "build/**/*.js"],
};
const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
