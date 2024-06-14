import { createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import connectMiddleware from '../Middleware/middelware';
import socketMiddleware from '../Utils/Socket/socketListener';
import { socket } from '../Utils/utils';
import socketEmitMiddleware from '../Utils/Socket/socketEmitter';
const middleware = [connectMiddleware,socketMiddleware(socket),socketEmitMiddleware(socket)];
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
