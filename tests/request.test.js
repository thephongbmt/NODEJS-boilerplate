/*eslint-disable*/
import { test } from '../utils/test-utils';
import server from '../server';
import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;
chai.use(chaiHttp);

let testCasesGetPing = [
  {
    message: 'Should be return pong',
    itFunc: done => {
      chai.request
        .agent(server)
        .get('/ping')
        .end((err, res, body) => {
          expect(res.body.data).to.equal('pong');
          expect(res).to.have.status(200);
          done();
        });
    }
  }
];
test('[GET]-/ping', testCasesGetPing);


//example for test case
let testCaseGetError = [
  {
    message: 'Should be return error',
    itFunc: done => {
      chai.request
        .agent(server)
        .get('/error')
        .end((err, res, body) => {
          expect(res.body.errors).to.equal('Error');
          expect(res).to.have.status(500);
          done();
        });
    }
  }
];
test('[GET]-/error', testCaseGetError);
