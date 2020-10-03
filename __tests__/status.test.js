const request = require('supertest');
const faker = require('faker');
const mqtt = require('../src/services/mqtt');
const app = require('../src/app');

jest.mock('../src/services/mqtt');

describe('GET /status', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('publishes a busy message to correct topic and returns 200', async () => {
    const name = faker.name.firstName().toLowerCase();
    const expectedMessage = { color: '(255, 0, 0)', mode: 'solid' };
    const response = await request(app)
      .get(`/status/${name}/busy`);

    expect(mqtt.publish).toHaveBeenCalledWith(`status/${name}`, expectedMessage);
    expect(response.status).toBe(200);
    expect(response.body.topic).toBe(`status/${name}`);
    expect(response.body.message).toEqual(expectedMessage);
  });

  it('publishes a working message to correct topic and returns 200', async () => {
    const name = faker.name.firstName().toLowerCase();
    const expectedMessage = { color: '(255, 168, 0)', mode: 'solid' };
    const response = await request(app)
      .get(`/status/${name}/working`);

    expect(mqtt.publish).toHaveBeenCalledWith(`status/${name}`, expectedMessage);
    expect(response.status).toBe(200);
    expect(response.body.topic).toBe(`status/${name}`);
    expect(response.body.message).toEqual(expectedMessage);
  });

  it('publishes a free message to correct topic and returns 200', async () => {
    const name = faker.name.firstName().toLowerCase();
    const expectedMessage = { color: '(0, 255, 0)', mode: 'solid' };
    const response = await request(app)
      .get(`/status/${name}/free`);

    expect(mqtt.publish).toHaveBeenCalledWith(`status/${name}`, expectedMessage);
    expect(response.status).toBe(200);
    expect(response.body.topic).toBe(`status/${name}`);
    expect(response.body.message).toEqual(expectedMessage);
  });

  it('returns an error if state is invalid', async () => {
    const name = faker.name.firstName();
    const state = 'foo';
    const response = await request(app)
      .get(`/status/${name}/${state}`);

    expect(mqtt.publish).not.toHaveBeenCalled();
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('invalid argument: state must be free, working or busy');
    expect(response.body.request).toEqual({ name, state });
  });
});
