import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.post('/', (request, response) => {
  return response.json({ ok: 'Ok' });
});

export default appointmentsRouter;
