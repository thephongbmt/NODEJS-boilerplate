import config from "config";

export const DEFAULT_PUBLIC_ERROR = false;
export const ERROR_MESSAGE_DEFAULT = "Some thing wrong !";

//get constant in config
export const PORT = config.get("PORT");
export const SENTRY = config.get("SENTRY");
export const ENV = config.get("NAME");
export const DESCRIPTION = config.get("DESCRIPTION");
export const JWT_SECRET = config.get("JWT_SECRET");
