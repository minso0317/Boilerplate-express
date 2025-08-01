import dotenv from "dotenv";
import { createServer } from "http";
import app from "./main";
import { PORT } from "./lib/constance";

dotenv.config();

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
