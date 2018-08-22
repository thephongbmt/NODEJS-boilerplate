import { findUserByEmailAndPassWordModel, getUserModel } from '../models/user';
import bcrypt from 'bcrypt';

export const findUserByEmailAndPassWordService = async user => {
	try {
		let password = await bcrypt.hash(user.password);
		let obj = { password: password, email: user.email };
		let userDB = findUserByEmailAndPassWordModel(obj);
		return userDB;
	} catch (err) {
		throw err;
	}
};

export const getUserService = getUserModel;
