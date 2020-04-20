'use stricts'

import chai from 'chai';
import chaiHttp from 'chai-http';
import { getToken, url } from './auth';

const expect = chai.expect;

chai.use(chaiHttp);

let token = '';

describe('User', () => {
    before(async () => {
        //Get token
        token = await getToken();
    });

    it('should return token', (done) => {
        chai.request(url)
            .post('/user/signin')
            .send({name: 'Anelvin Mejia', password: 'Anelvin123'})
            .end((error, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token')
                done();
            });
    });

    it('should return users', (done) => {
        chai.request(url)
            .get('/user')
            .set('Authorization', 'Bearer ' + token)
            .end((error, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return status 401', (done) => {
        chai.request(url)
            .get('/user')
            .end((error, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal('Es necesario un token');
                done();
            });
    });

    it('should create the user', (done) => {
        chai.request(url)
            .post('/user/create')
            .send({name: 'Juan Peña', password: 'Juan123'})
            .end((error, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal('User created');
                expect(res.body).to.have.property('responseToken');
                done();
            })
    })

});
