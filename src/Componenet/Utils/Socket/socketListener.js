
const socketMiddleware = (socket) => (store) => (next) => (action) => {
  if (action.type === 'SOCKET_ON') {
    const { event, handler } = action.payload;
    console.log("Test");
    socket.on(event, (data) => {
      handler(data, store.dispatch);
    });
  }
  return next(action);
};

export default socketMiddleware;
