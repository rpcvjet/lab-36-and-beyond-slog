'use strict';

require('./lib/mock-env.js');

const {expect} = require('chai');
const superagent = require('superagent');
const serverControl = require('./lib/servercontrol');
const baseURL = process.env.API_URL;

describe('testing auth router', function (){

  before(serverControl.start);
  after(serverControl.stop);

  describe('testing GET /api/login', function(){
    it('should respond with a 200', (done) => {
      superagent.get(`${baseURL}/api/login`)
      .auth('kenny@kenny.com', 'whatsup')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(!!res.text).to.equal(true);
        done();
      })
      .catch(done);
    });
    it('should respond with a 401', (done) => {   //no auth
      superagent.get(`${baseURL}/api/login`)
      .then(done)
      .catch(res =>  {
        expect(res.status).to.equal(401);
        done();
      })
      .catch(done);
    });
    it('should respond with a 401', (done) => {   //no email
      superagent.get(`${baseURL}/api/login`)
      .auth('', 'whatsup')
      .then(done)
      .catch(res =>  {
        expect(res.status).to.equal(401);
        done();
      })
      .catch(done);
    });
    it('should respond with a 401', (done) => {   //no password
      superagent.get(`${baseURL}/api/login`)
      .auth('kenny@kenny.com', '')
      .then(done)
      .catch(res =>  {
        expect(res.status).to.equal(401);
        done();
      })
      .catch(done);
    });
    it('should respond with a 401', (done) => {   //wrong password
      superagent.get(`${baseURL}/api/login`)
      .auth('kenny@kenny.com', 'wrongpassword')
      .then(done)
      .catch(res =>  {
        expect(res.status).to.equal(401);
        done();
      })
      .catch(done);
    });
  });
});//end of testing block
