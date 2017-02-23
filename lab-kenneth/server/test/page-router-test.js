'use strict';

require('./lib/mock-env.js');

const {expect} = require('chai');
const superagent = require('superagent');
const Page = require('../model/page.js');
const serverControl = require('./lib/servercontrol');
const baseURL = process.env.API_URL;

describe('testing page router', function (){

  before(serverControl.start);
  after(serverControl.stop);

  before(done => {
    superagent.get(`${baseURL}/api/login`)
    .auth('kenny@kenny.com', 'whatsup')
    .then(res => {
      this.tempToken = res.text;
      done();
    })
    .catch(done);
  });
  it('should return a note', (done) => {
    superagent.put(`${baseURL}/api/page`)
    .send({
      title: 'this is my page',
      content: 'hey yalllllll',
      showinNav: true,
    })
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      this.tempPage = res.body;
      expect(res.status).to.equal(200);
      expect(!!res.body).to.equal(true);
      expect(res.body.title).to.equal('this is my page');
      expect(res.body.content).to.equal('hey yalllllll');
      expect(res.body.showinNav).to.equal(true);
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
  it('should return a 400 error', (done) => { //no content
    superagent.put(`${baseURL}/api/page`)
    .send({
      title: 'this is my page',
      showinNav: true,
    })
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(done)
    .catch(res =>  {
      expect(res.status).to.equal(400);
      done();
    })
    .catch(done);
  });
  it('should respond with a 200 and array of pages', (done) => {
    superagent.get(`${baseURL}/api/page`)
    .then(res => {
      expect(res.status).to.equal(200);
      expect(Array.isArray(res.body)).to.equal(true);
      done();
    })
    .catch(done);
  });
  it('should delete a page', (done) =>{
    superagent.delete(`${baseURL}/api/page/${this.tempPage.id}`)
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      expect(res.status).to.equal(204);
      done();
    });
  });
});
