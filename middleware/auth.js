// import jwt from "jsonwebtoken";
// import passport from "passport";
// import httpStatus from "http-status";
// /* POST login. */

// router.post("/login", function(req, res, next) {
//   passport.authenticate("local", { session: false }, (err, user, info) => {
//     if (err || !user) {
//       return res.status(httpStatus.NOT_FOUND).json({
//         message: err.message,
//         user: user
//       });
//     }
//     req.login(user, { session: false }, err => {
//       if (err) {
//         res.send(err);
//       }
//       // generate a signed son web token with the contents of user object and return it in the response
//       const token = jwt.sign(user, "your_jwt_secret");
//       return res.json({ user, token });
//     });
//   })(req, res);
// });
