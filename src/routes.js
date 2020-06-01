import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionContoller from './app/controllers/SassionController';

import authMeddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionContoller.store);

routes.use(authMeddleware);

routes.put('/users', UserController.update);

export default routes;
