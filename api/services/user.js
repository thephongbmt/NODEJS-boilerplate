import { findUserByEmailAndPassWord, getUser } from "../models/user";
import bcrypt from 'bcrypt';

export async const findUserByEmailAndPassWord = (user) => {
    try {
        let password = await bcrypt.hash(user.password);
        let obj = { password:password , email:user.email };
        let user = findUserByNameAndPassWord(obj);
        return user;
    } catch(err) {
        throw err;
    }
};

export const getUser = getUser;

