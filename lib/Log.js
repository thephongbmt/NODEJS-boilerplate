/*eslint no-console: ["error", { allow: ["log"] }] */
import chalk from 'chalk';

class Log {
	print(message, color = 'white') {
		console.log(chalk[color](message));
	}
}
export default new Log();
