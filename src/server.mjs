import http from "http";
import dotenv from "dotenv";

import app from "./app.mjs";
import { mongoConnect } from "./services/mongo.mjs";

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 8000;

async function startServer() {
  await mongoConnect();

  server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

startServer();
