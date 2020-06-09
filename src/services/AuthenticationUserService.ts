import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

class AutenticationUserService {
  public async execute({ email, password }: Request): Promise<{ user: User }> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password!');
    }

    const passwordMatchad = compare(password, user.password);

    if (!passwordMatchad) {
      throw new Error('Incorrect email/password!');
    }

    return { user };
  }
}

export default AutenticationUserService;
