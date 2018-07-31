/*eslint-disable*/
import express from "express";
import bodyParser from "body-parser";
import Raven from "raven";
import compression from "compression";
import cors from "cors";
import expressValidation from "express-validation";
import { middleware } from "./middleware/middleware-api";
import { SENTRY, PORT, ENV, DESCRIPTION } from "./constant";

const app = express();
const route = express.Router();

//MIDDLE WARE
//Handler body parser Request
app.use(bodyParser.urlencoded({ extended: false }, bodyParser.json()));
//compress response
app.use(compression());
//cross origin resource sharing
app.use(cors());
//public resource
app.use("/", express.static(__dirname + "assets/public"));

//RAVEN
// Must configure Raven before doing anything else with it
if (SENTRY) {
  Raven.config(SENTRY, { environment: ENV }).install();
  // The request handler must be the first middleware on the app
  app.use(Raven.requestHandler());
}

middleware.handleResponse(app);
//ROUTER
//check API test is live
app.get("/ping", (req, res, next) => {
  res.SUCCESS("pong");
});
//check API test is error
app.get("/error", (req, res, next) => {
  return next(res.ERROR("OPs Some thing broken here !"));
});

app.get("/auth", (req, res, next) => {
  res.SUCCESS({ token: 123456 });
  next();
});


//check request not found
middleware.handleNotFoundRequest(app);
//MIDDLE WARE Handler Error
//handle error
middleware.handleError(app);
//Raven
app.use(Raven.errorHandler());

const server = app.listen(PORT || 3000, (req, res, next) => {
  let port = server.address().port;
  let host =
    server.address().address === "::" ? "localhost" : server.address().address;
  console.log(`- ${DESCRIPTION}
  + Server is running at http://${host}:${port}
  + API ENV: ${ENV || "development"}`);
});

export default server;
