import user from "./routers/user";
import chalk from "chalk";
export default app => {
  try {
    let route = app.Route();
    //init all router
    app.use(user(route));
    a= a+1;
    //message
    chalk.green(`Route was init`);
  } catch (e) {
    chalk.red(e);
  }
};
