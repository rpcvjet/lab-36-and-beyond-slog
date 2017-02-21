'use strict';

require('./mock-env.js');
const app = require('../../index.js');
const serverControl = module.exports = {};

let server;

serverControl.start = (done) => {
  if(!app.isRunning)
    return server = app.listen(process.env.PORT, () => {
      app.isRunning = true;
      console.log('mock server has started', process.env.PORT);
      done();
    });
  done();
};

serverControl.stop = (done) => {
  if (app.isRunning)
    return server.close(() => {
      app.isRunning = false;
      console.log('server stopped');
      done();
    });
  done();
};
