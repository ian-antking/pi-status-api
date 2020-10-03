const request = require('supertest');
const faker = require('faker');
const app = require('../src/app');

jest.mock('../src/services/mqtt');

describe('/status', () => {
  it('returns a 200 status, the published message and the topic', async () => {
    const name = faker.name.firstName();
    const response = await request(app)
      .get(`/status/${name}/busy`);

    expect(response.status).toBe(200);
    expect(response.body.topic).toBe(`status/${name}`);
    expect(response.body.message).toEqual({
      color: '(255, 0, 0)',
      mode: 'solid',
    });
  });

  it('returns an error if state is invalid', async () => {
    const name = faker.name.firstName();
    const state = 'foo';
    const response = await request(app)
      .get(`/status/${name}/${state}`);

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('invalid argument: state must be free, working or busy');
    expect(response.body.request).toEqual({ name, state });
  });
});
