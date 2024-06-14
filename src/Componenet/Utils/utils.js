import { io } from "socket.io-client";
const port=process.env.PORT
export const socket=io(port);   