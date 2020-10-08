import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '2121212',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('2121212');
    // it('should not be able to create two appointment on the same time', () => {
    //   expect(1 + 2).toBe(3);
    // });
  });
});
