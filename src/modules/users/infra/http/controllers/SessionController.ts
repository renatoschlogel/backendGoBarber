import { Request, Response } from 'express';

import { container } from 'tsyringe';
import AutenticationUserService from '../../../services/AuthenticationUserService';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const autenticationUserService = container.resolve(
      AutenticationUserService,
    );

    const { user, token } = await autenticationUserService.execute({
      email,
      password,
    });
    delete user.password;

    const session = { user, token };
    return response.json(session);
  }
}
