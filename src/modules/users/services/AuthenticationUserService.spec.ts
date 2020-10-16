import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProviders/fakes/FakeHashProvider';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import AuthenticationUserService from './AuthenticationUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticationUser', () => {
  it('should be able to Autenticate', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticationUserService = new AuthenticationUserService(
      fakeUserRepository,
      fakeHashProvider,
    );
    const createUserService = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    const user = await createUserService.execute({
      name: 'Renato',
      email: 'renato@teste.com',
      password: '123456',
    });

    const response = await authenticationUserService.execute({
      email: 'renato@teste.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to Autententicate with non existing user', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticationUserService = new AuthenticationUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    expect(
      authenticationUserService.execute({
        email: 'renato@teste.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to Autenticate with wrong password', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    const authenticationUserService = new AuthenticationUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    await createUserService.execute({
      name: 'Renato',
      email: 'renato@teste.com',
      password: '123456',
    });

    expect(
      authenticationUserService.execute({
        email: 'renato@teste.com',
        password: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
