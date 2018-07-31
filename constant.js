import config from "config";
export const DEFAULT_PUBLIC_ERROR = false;
export const ERROR_MESSAGE_DEFAULT = "Some thing wrong !";

export const SUCCESS_CODE_DEFAULT = 200;

//get constant in config
export const PORT = config.get("PORT");
export const SENTRY = config.get("SENTRY");
export const ENV = config.get("NAME");
export const DESCRIPTION = config.get("DESCRIPTION");
