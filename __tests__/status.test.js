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
});
