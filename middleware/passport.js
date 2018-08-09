// import passport from "passport";
// import { Strategy } from "passport-local";
// import httpStatus from "http-status";
// import { findUserByEmailAndPassWord } from "../api/services/user";
// import { ExtractJwt } from "passport-jwt";
// import { JWT_SECRET } from "../constant";
// passport.use(
//   new Strategy(
//     {
//       usernameField: "email",
//       passwordField: "password"
//     },
//     async (email, password, next) => {
//       //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
//       try {
//         let user = await findUserByEmailAndPassWord({ email, password });
//         if (!user) {
//           next(null, false, {
//             message: "Incorrect email or password.",
//             status: httpStatus.NON_AUTHORITATIVE_INFORMATION
//           });
//         }
//         return next(null, user, {
//           message: "Login success",
//           status: httpStatus.OK
//         });
//       } catch (err) {
//         return next(null, false, err);
//       }
//     }
//   )
// );

// passport.use(
//   new Strategy(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: JWT_SECRET
//     },
//     function(jwtPayload, cb) {
//       //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
//       return UserModel.findOneById(jwtPayload.id)
//         .then(user => {
//           return cb(null, user);
//         })
//         .catch(err => {
//           return cb(err);
//         });
//     }
//   )
// );
