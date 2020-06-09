import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AutenticationUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password!');
    }

    const passwordMatchad = compare(password, user.password);

    if (!passwordMatchad) {
      throw new Error('Incorrect email/password!');
    }

    const token = sign({}, '4555dedca54e75d668e90090f6f94839', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default AutenticationUserService;
