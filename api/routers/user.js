import {getUserController, loginController} from '../controllers/user';

export default route => {
	route.get('/user', getUserController);
	route.get('/login', loginController);

	return route;
};
