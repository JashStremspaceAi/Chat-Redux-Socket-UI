// export const SET_STATE = 'SET_STATE'
export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message,
});

export const addUser = (user)=>({
    type: 'ADD_USER',
    payload: user,
});
export const UserChat =(chat)=>({
    type: 'USER_CHAT',
    payload: chat,
})
export const socketOn = (event, handler) => ({
  type: 'SOCKET_ON',
  payload: { event, handler },
});
export const emitUser = (event, data) => ({
    type: 'SOCKET_EMIT_USER',
    payload: {event, data},
  });
//   export function setState(state) {
//     return { type: SET_STATE, 
//         payload: state }
//   }