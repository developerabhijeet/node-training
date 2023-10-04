import express from "express";
import bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { config } from "dotenv";
import router from "./routes";
import { connect } from "./model";
import { initSeed } from "./controller/user.controller";

const app = express();
config();

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "REST API for Swagger Documentation",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    servers: [{ url: "http://localhost:3000/" }],
  },
  apis: [`${__dirname}/routes/user.routes.ts`, "./dist/routes/user.routes.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());
app.use(router);

connect()
  .then(async () => {
    console.log("Connected to MongoDB" + process.env.mongoUri);
    app.listen(3000, () => console.log("server listening on 3000"));
    await initSeed();
  })
  .catch((error) => console.log("Error: " + error.message));
