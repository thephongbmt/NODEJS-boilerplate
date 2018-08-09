import { findUserByNameAndPassWord, getUser } from "../services/user";
export async const getUser = (req, res, next) => {
  try {
    let user =await getUser();
    return res.SUCCESS(user);
  } catch (err) {
    return next(res.ERROR(err));
  }
};

export async const login = (req, res, next) => {
  try {
    let username = req.params.user_name;
    let user = await findUserByNameAndPassWord(username);
  } catch (err) {
    return next(res.ERROR(err));
  }
};
