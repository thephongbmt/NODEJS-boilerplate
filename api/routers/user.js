import { getUser, login } from '../controllers';

export default route => {
	route.get('/user', getUser);
	route.get('/login', login);
};
