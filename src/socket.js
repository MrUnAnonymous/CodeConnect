import {io} from 'socket.io-client'

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 1000,
        transport: ['websocket'],
    };
    return io(process.env.REACT_APP_BACKEND_URL , options);
};