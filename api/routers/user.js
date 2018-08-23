import { getUserController, loginController } from '../controllers';

export default route => {
	route.get('/user', getUserController);
	route.get('/login', loginController);

	return route;
};
