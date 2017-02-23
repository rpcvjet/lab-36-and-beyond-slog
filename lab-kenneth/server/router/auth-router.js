'use strict';

const {Router} = require('express');
const basicAuth = require('../lib/basic-auth');
const authRouter = module.exports = new Router();

authRouter.get('/api/login', basicAuth, (req, res, next) =>{
  res.send(req.token);
});
