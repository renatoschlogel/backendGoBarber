import { Router } from 'express';

import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({
    mensagem: 'Parabéns :D, aplicação respondendo com sucesso!',
  });
});

routes.use('/appointments', appointmentsRouter);

export default routes;
