const request = require('supertest');
const faker = require('faker');
const mqtt = require('../src/services/mqtt');
const app = require('../src/app');

jest.mock('../src/services/mqtt');

describe('GET /mode/:name/:mode', () => {
  const modes = [
    'off',
    'solid',
    'blink',
    'rainbow',
    'alert',
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  modes.forEach((mode) => {
    it(`publishes a "${mode}" message`, async () => {
      const name = faker.name.firstName().toLowerCase();
      const expectedMessage = { mode };
      const response = await request(app)
        .get(`/mode/${name}/${mode}`);

      expect(mqtt.publish).toHaveBeenCalledWith(`status/${name}`, expectedMessage);
      expect(response.status).toBe(200);
      expect(response.body.topic).toBe(`status/${name}`);
      expect(response.body.message).toEqual(expectedMessage);
    });
  });

  it('returns an error if mode is invalid', async () => {
    const name = faker.name.firstName().toLowerCase();
    const mode = 'foo';
    const response = await request(app)
      .get(`/mode/${name}/${mode}`);

    expect(mqtt.publish).not.toHaveBeenCalled();
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('invalid mode: mode must be off, solid, blink, rainbow or alert');
    expect(response.body.request).toEqual({ name, mode });
  });
});
