import user from './routers/user';
import Log from '../lib/Log';
import express from 'express';
export default app => {
	try {
		let route = express.Router();
		//init all router
		app.use('/', user(route));
		//message
		Log.success('Route was init', 'green');
	} catch (e) {
		Log.error(e, 'red');
	}
};
