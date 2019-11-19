const axios = require('axios');

const api = axios.create({
    baseURL: 'http://192.168.1.2:8000'
});

export default api;