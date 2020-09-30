import express, { Router } from 'express';

import sessionsRouter from './sessions.routes';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import uploadConfig from '../../../../config/upload';

const routes = Router();

routes.use('/files', express.static(uploadConfig.directory));

routes.use('/sessions', sessionsRouter);

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
