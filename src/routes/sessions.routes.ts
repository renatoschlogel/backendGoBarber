import { Router } from 'express';
import AutenticationUserService from '../services/AuthenticationUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const autenticationUserService = new AutenticationUserService();

    const { user } = await autenticationUserService.execute({
      email,
      password,
    });

    delete user.password;

    const session = { user };
    return response.json(session);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionRouter;
