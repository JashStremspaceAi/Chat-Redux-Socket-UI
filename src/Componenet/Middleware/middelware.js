import {socket} from '../Utils/utils'
const connectMiddleware =store => next => action => {
    try{
    socket.on( 'connect',() => {
        console.log("Connect Success");
      });
      next(action);
    }
    catch(err){
        console.log(err);
    }
}
   
  export default connectMiddleware;