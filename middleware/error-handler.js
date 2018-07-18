/*eslint-disable*/
import { ERROR_CODE_DEFAULT, ERROR_MESSAGE_DEFAULT, SUCCESS_CODE_DEFAULT } from '../constant';
import moment from 'moment';
import Raven from 'raven';
export const middleware = {

  /*
    Handle express error from express
  */
  handleError: app =>
    app.use((err, req, res, next) => {
      res.status(500).send(err);
      return Raven.captureException(new Error(err.errors));
    }),

  /*
    ERR: handle for error response,
    SUCCESS: handle for  success response
  */
  handleResponse: app =>
    app.use((req, res, next) => {
      let resSuccess = (data, code = SUCCESS_CODE_DEFAULT) => {
        let dataObj = data;
        return res.status(code).json({ data: dataObj });
      };

      let resError = (message = ERROR_MESSAGE_DEFAULT, code = ERROR_CODE_DEFAULT) => {
        return { errors: message };
      };

      res.SUCCESS = resSuccess;
      res.ERROR = resError;
      next();
    })
};
