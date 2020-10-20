import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import AppError from '@shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';

import UpdateUserAvatarService from './UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const updateUserAvatarService = new UpdateUserAvatarService(
      fakeUserRepository,
      fakeStorageProvider,
    );

    const user = await fakeUserRepository.create({
      name: 'Renato',
      email: 'renato@teste.com',
      password: '123456',
    });

    const avatar = 'avatarteste.jpg';
    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFileName: avatar,
    });

    expect(user.avatar).toBe(avatar);
  });

  it('should not be able to update avatar from non existing user', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const updateUserAvatarService = new UpdateUserAvatarService(
      fakeUserRepository,
      fakeStorageProvider,
    );

    const avatar = 'avatarteste.jpg';
    expect(
      updateUserAvatarService.execute({
        user_id: 'usernotexists',
        avatarFileName: avatar,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar whe updating new one', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateUserAvatarService = new UpdateUserAvatarService(
      fakeUserRepository,
      fakeStorageProvider,
    );

    const user = await fakeUserRepository.create({
      name: 'Renato',
      email: 'renato@teste.com',
      password: '123456',
    });

    const avatarDeletar = 'avatartesteDeletar.jpg';
    const avatarNovo = 'avatarNovo.jpg';
    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFileName: avatarDeletar,
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFileName: avatarNovo,
    });

    expect(deleteFile).toHaveBeenCalledWith(avatarDeletar);
    expect(user.avatar).toBe(avatarNovo);
  });
});
