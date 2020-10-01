import express, { Router } from 'express';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import uploadConfig from '@config/upload';

const routes = Router();

routes.use('/files', express.static(uploadConfig.directory));

routes.use('/sessions', sessionsRouter);

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
