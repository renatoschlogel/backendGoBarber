import { getRepository } from 'typeorm';

import { response } from 'express';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const cheackUserExists = await userRepository.findOne({
      where: { email },
    });

    if (cheackUserExists) {
      throw new Error('Email address already used!');
    }

    let user = userRepository.create({ name, email, password });
    user = await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
