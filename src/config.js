export default {
    API_URI: process.env.NODE_ENV === 'production'
        ? 'http://localhost:4001/v1'
        : 'http://localhost:4001/v1'
};