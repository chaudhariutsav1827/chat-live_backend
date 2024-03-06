import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: [
    path.join(__dirname, "./swagger.docs.ts"),
    // path.join(__dirname, "../../api/v1/routes/*.ts"),
    // path.join(__dirname, "../../api/v1/routes/*.js"),
  ],
};

export const swaggerSpec = swaggerJSDoc(options);