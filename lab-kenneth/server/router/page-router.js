'use strict';

const {Router} = require('express');

const jsonParser = require('body-parser').json();
const Page = require('../model/page.js');
const bearerAuth = require('../lib/bearer-auth.js');

const pageRouter = module.exports = new Router();

pageRouter.put('/api/page', bearerAuth, jsonParser, (req, res,next)=>{
  new Page(req.body).save()
  .then(page => res.json(page))
  .catch(next);
});

pageRouter.get('/api/page',(req,res, next) => {
  Page.fetchAll()
  .then(page => res.json(page))
  .catch(next);
});

pageRouter.delete('/api/page/:id', bearerAuth, (req,res,next) =>{
  Page.findIdAndDelete(req.params.id)
  .then(() => res.sendStatus(204))
  .catch(next);
});
