const app = require('../index');

//Autenticação
describe('Auth Middleware', () => {
  it('should call next() for exceptions', (done) => {
    const req = { url: '/users/login' };
    const res = {};
    const next = () => {
      expect(true).to.be.true;
      done();
    };

    auth(req, res, next);
  });

  it('if token is invalid, it should return 401', (done) => {
    const req = { url: '/some-url', headers: { authorization: 'invalid-token' } };
    const res = { status: (statusCode) => {
      expect(statusCode).to.equal(401);
      return res;
    }, send: (message) => {
      expect(message).to.equal('Invalid Token');
      done();
    }};
    const next = () => {
      throw new Error('next() should not be called');
    };

    auth(req, res, next);
  });
});

describe('Root Route', () => {
  it('should return status 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({ message: 'HOME -- CIP API' });
        done();
      });
  });
});



//Insert User
test('INSERT USER', async () => {
  const data = {
    username: 'Lucas',
    role: 'user',
    email: 'lucas@gmail.com',
    password: '12345',
    school: 'ESMAD',
    points: 0,
    coins: 0
  };
  const result = await app.insert(data);
  expect(result).toBeTruthy();
});

//Get User
test('GET USER', async () => {
  const username = 'Lucas';
  const result = await app.list(username);
  expect(result.username).toMatch('Lucas');
  expect(result.email).toMatch('lucas@gmail.com');
});

//Delete User
test('DELETE USER', async () => {
  const email = 'lucas@gmail.com';
  const result = await app.drop(email);
  expect(result.username).toMatch('Lucas');
  expect(result).toBeTruthy();
});

afterAll(() => {
  app.clearDatabase();
});