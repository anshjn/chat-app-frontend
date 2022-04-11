import { io } from 'socket.io-client';
let socket
export default socket = io("http://localhost:3000", {transports: ['websocket']});

