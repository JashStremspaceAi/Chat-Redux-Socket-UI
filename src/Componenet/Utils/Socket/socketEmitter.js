const socketEmitMiddleware = (socket) => (store) => (next) => (action) => {
  if (action.type === "SOCKET_EMIT_USER") {
    const { event, data } = action.payload;
    console.log("Emit");
    socket.emit(event, data);
  }
  return next(action);
};

export default socketEmitMiddleware;
