import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-app-f8018-default-rtdb.firebaseio.com/'
});

export default instance;