const request = require('supertest');
const app = require('../../src/app');

describe('Test at /cars endpoint', () => {
  const PATH = '/cars-quiz/questions';

  test('Must list all alternatives by question id', async () => {
    const QUESTION_ID = 1;
    const res = await request(app).get(`${PATH}/${QUESTION_ID}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('question');
  });
});
