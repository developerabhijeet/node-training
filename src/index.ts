import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import http from "http";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);


server.listen(4500, () => {
    console.log("server is running on port 4500")
})