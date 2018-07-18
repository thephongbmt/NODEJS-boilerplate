import config from 'config';

export const ERROR_CODE_DEFAULT = 500;
export const ERROR_MESSAGE_DEFAULT = 'Some thing wrong !';

export const SUCCESS_CODE_DEFAULT = 200;

//get constant in config
export const PORT = config.get('PORT');
export const SENTRY = config.get('SENTRY');
export const ENV = config.get('NAME');