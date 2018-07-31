/*eslint-disable*/
import {
  ERROR_MESSAGE_DEFAULT,
  SUCCESS_CODE_DEFAULT,
  DEFAULT_PUBLIC_ERROR
} from "../constant";
import httpStatus from "http-status";
import expressValidation from "express-validation";
import Raven from "raven";
import APIError from "./APIError";

/*
  covert error to custom API Error
*/
const _convertErr = err => {
  let errorAPI;
  if (typeof err === "string") {
    errorAPI = new APIError(
      err,
      httpStatus.INTERNAL_SERVER_ERROR,
      DEFAULT_PUBLIC_ERROR
    );
  } else if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors
      .map(error => error.messages.join(". "))
      .join(" and ");
    errorAPI = new APIError(
      unifiedErrorMessage,
      err.status,
      DEFAULT_PUBLIC_ERROR
    );
    return next(error);
  } else {
    errorAPI = new APIError(err.message, err.status, DEFAULT_PUBLIC_ERROR);
  }
  return errorAPI;
};

export const middleware = {
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

      let resError = (
        message = ERROR_MESSAGE_DEFAULT,
        code = httpStatus.INTERNAL_SERVER_ERROR
      ) => {
        return new APIError(message, code, true);
      };

      res.SUCCESS = resSuccess;
      res.ERROR = resError;
      next();
    }),

  /*
    Handle for unknown URL request to ser ver
  */
  handleNotFoundRequest: app => {
    app.use((req, res, next) => {
      return next(res.ERROR("OPs going some where !", 404, false));
    });
  },

  /*
    Handle express  error from route express
  */
  handleError: app =>
    app.use((err, req, res, next) => {
      err = _convertErr(err);
      let message =
        err.isPublic || req.query.is_public === "1"
          ? {
              message: err.message,
              stack: err.stack
            }
          : { message: `${err.status} ${httpStatus[`${err.status}_NAME`]}` };
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(message);
      //return Raven.captureException(.ERR(err.errors));
    })
};
