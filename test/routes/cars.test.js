const request = require('supertest');
const app = require('../../src/app');

describe('Test at /cars endpoint', () => {
  const PATH = '/cars-quiz/cars';

  test('Must list all users', async () => {
    const res = await request(app).get(`${PATH}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('Must list cars by id', async () => {
    const CAR_ID = 1;
    const res = await request(app).get(`${PATH}/${CAR_ID}`);
    expect(res.status).toBe(200);
    expect(res.body[0].id).toBe(CAR_ID);
  });
});
