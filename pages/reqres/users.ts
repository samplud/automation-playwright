const request = require('supertest')
const api = request('https://reqres.in/api');

const listUsers = (page) => api.get('/users')
    .set('Content-Type', 'application/json')
    .query({'page': page});

const singleUser = (userId) => api.get(`/users/${userId}`)
    .set('Content-Type', 'application/json');

module.exports = {
    listUsers, singleUser
}
