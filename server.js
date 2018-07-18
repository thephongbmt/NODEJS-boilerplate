/*eslint-disable*/
import express from 'express';
import bodyParser from 'body-parser';
import Raven from 'raven';
import { middleware } from './middleware/error-handler';
import { SENTRY, PORT, ENV } from './constant';
const app = express();

//MIDDLE WARE Handler Request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//RAVEN
// Must configure Raven before doing anything else with it
Raven.config(SENTRY, { environment: ENV }).install();
// The request handler must be the first middleware on the app
app.use(Raven.requestHandler());
middleware.handleResponse(app);

//ROUTER
//check API test is live
app.get('/ping', (req, res, next) => {
  res.SUCCESS('pong');
});
//check API test is error
app.get('/error', (req, res, next) => {
  return next(res.ERROR('OPs Some thing broken here !'));
});

//MIDDLE WARE Handler Error
//handle error
middleware.handleError(app);
//Raven
app.use(Raven.errorHandler());

const server = app.listen(PORT || 3000, (req, res, next) => {
  let port = server.address().port;
  let host = server.address().address === '::' ? 'localhost' : server.address().address;
  console.log('Server is running at http://' + host + ':' + port);
  console.log(`API ENV: ${ENV || 'development'}`);
});

export default server;
