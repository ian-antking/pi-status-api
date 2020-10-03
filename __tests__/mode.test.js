const request = require('supertest');
const faker = require('faker');
const mqtt = require('../src/services/mqtt');
const app = require('../src/app');

jest.mock('../src/services/mqtt');

describe('GET /mode/:name/:mode', () => {
  it('publishes a mode message to the status topic', async () => {
    const name = faker.name.firstName().toLowerCase();
    const response = await request(app)
      .get(`/mode/${name}/off`);

    expect(mqtt.publish).toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(response.body.topic).toBe(`status/${name}`);
    expect(response.body.message).toEqual({
      mode: 'off',
    });
  });
});
