import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// setting environment variables
dotenv.config();

import { errorHandler } from "@middlewares";
import { accessLogStream, connectToDatabase, corsOptions, swaggerSpec } from "@config";
import { userRoutes } from "@routes";


const port = process.env.PORT || 3000;
const app = express();

// cors
app.use(cors(corsOptions));

// logs
app.use(morgan("tiny", { stream: accessLogStream }));

// middleware for parsing data into json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes config
app.use("/user", userRoutes);

// Global error handling middleware
app.use(errorHandler);

console.log(swaggerSpec)
// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// connect to DB
connectToDatabase();

app.listen(port, () => {
  console.log(`Ready on port ${port}`);
});
