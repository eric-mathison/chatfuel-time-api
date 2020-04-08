import app from '../src/index';

describe('Get /', () => {
    it('should return an object', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('GET /chatfuel', () => {
    it('should return an error if no timezone is provided', (done) => {
        chai.request(app)
            .get('/chatfuel')
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.have.a.property('error');
                done();
            });
    });
});
