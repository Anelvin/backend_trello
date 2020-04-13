const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));

const UserRoutes = require('../routes/user');
app.use('/user', UserRoutes);

describe('Post Endpoints', () =>{
    it('should create a new post', async () => {
        const res = await request(app)
        .post('/user/create')
        .send({
            name:'Marta González',
            password:'Marta123'
        })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHavenProperty('post')
    })
})