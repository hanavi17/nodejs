'use strict';

const restify = require('restify');
const cors = require('cors');
const project = require('../../package.json');
const basicAuth = require('../auth/basic_auth_helper');
const wrapper = require('../helpers/utils/wrapper');
const Retailer = require('../modules/CoreService/handlers/api_handler');

let AppServer = function () {
  this.server = restify.createServer({
    name: project.name + '-server',
    version: project.version,
    strictRouting: true
  });

  this.server.serverKey = '';
  this.server.use(restify.plugins.acceptParser(this.server.acceptable));
  this.server.use(restify.plugins.queryParser());
  this.server.use(restify.plugins.bodyParser());
  this.server.use(restify.plugins.authorizationParser());

  // required for CORS configuration
  this.server.use(cors());
  this.server.opts(/.*/, function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', req.header('Access-Control-Request-Method'));
    res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));
    res.header('Access-Control-Expose-Headers', 'Authorization');
    res.header('Access-Control-Allow-Headers', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,**Authorization**');
    res.send(200);
    return next();
  });

  // required for basic auth
  this.server.use(basicAuth.init());

  // anonymous can access the end point, place code bellow
  this.server.get('/', (req, res, next) => {
    wrapper.response(res, `success`, wrapper.data(`Code BackEnd`), `This service is running properly`);
  });
  // LOGIN
  this.server.post('/api/login/user', basicAuth.isAuthenticated, Retailer.postDataLoginUser);
  this.server.post('/api/login/admin', basicAuth.isAuthenticated, Retailer.postDataLoginAdmin);
  this.server.get('/api/login/getDataLoginPassword', basicAuth.isAuthenticated, Retailer.getDataLoginPassword);
  this.server.get('/api/login/getDataLoginPassword1', basicAuth.isAuthenticated, Retailer.getDataLoginPassword1);
  
  // REPORT PROBLEM

  //GET
  this.server.get('/api/report/getProblemReport', basicAuth.isAuthenticated, Retailer.getDataReport);
  this.server.get('/api/report/getProblemReportReq', basicAuth.isAuthenticated, Retailer.getDataReportReq);
  this.server.get('/api/report/getProblemReportOnGoing', basicAuth.isAuthenticated, Retailer.getDataReportOnGoing);
  this.server.get('/api/report/getProblemReportFinish', basicAuth.isAuthenticated, Retailer.getDataReportFinish);
  // this.server.get('/api/report/getProblemReportFinish1', basicAuth.isAuthenticated, Retailer.getDataReportFinish1);

  this.server.get('/api/report/getProblemReportUser/:idUser', basicAuth.isAuthenticated, Retailer.getDataReportUser);

  //POST
  this.server.post('/api/report/postProblemReport', basicAuth.isAuthenticated, Retailer.postDataReport);
  //PUT
  this.server.put('/api/report/putOnGoing/:idProblem', basicAuth.isAuthenticated, Retailer.updateDataReportOnGoing);
  this.server.put('/api/report/putFinish/:idProblem', basicAuth.isAuthenticated, Retailer.updateDataReportFinish);
  //
  this.server.del('/api/report/delReport/:idProblem', basicAuth.isAuthenticated, Retailer.delReport);
  
};
module.exports = AppServer;
