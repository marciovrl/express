const request = require('supertest');
const app = require('../../src/app');

const PATH = '/cars-quiz/users';

describe('Test verb GET at /users endpoint', () => {
  test('Must list all users', async () => {
    const res = await request(app).get(`${PATH}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('Must list user by id', async () => {
    const USER_ID = 1;
    const res = await request(app).get(`${PATH}/${USER_ID}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(USER_ID);
  });
});

describe('Test verb POST at /users endpoint', () => {
  let USER_TEST;

  beforeEach(() => {
    USER_TEST = {
      name: 'Dayane',
      mail: 'dayane@example.com',
      phone: '(11) 55555-5555',
    };
    return USER_TEST;
  });

  test('Must create user', async () => {
    const res = await request(app).post(`${PATH}`).send(USER_TEST);
    expect(res.status).toBe(201);
    expect(res.body.mail).toBe(USER_TEST.mail);
  });

  test('Must not create user without name', async () => {
    delete USER_TEST.name;
    const res = await request(app).post(`${PATH}`).send(USER_TEST);
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Name is required');
  });

  test('Must not create user without email', async () => {
    delete USER_TEST.mail;
    const res = await request(app).post(`${PATH}`).send(USER_TEST);
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Mail is required');
  });
});

describe('Test verb PUT at /users endpoint', () => {
  let USER_ID;

  beforeEach(async () => {
    const USER = {
      name: 'Dayane',
      mail: 'dayane@example.com',
      phone: '(11) 55555-5555',
    };
    const res = await request(app).post(`${PATH}`).send(USER);
    expect(res.status).toBe(201);
    USER_ID = res.body.id;
    return USER_ID;
  });

  test('Must edit user by id', async () => {
    const USER_DATA = {
      name: 'Dayane Barbosa',
      mail: 'dayane.barbosa@example.com',
      phone: '(11) 55444-5555',
    };
    const res = await request(app).put(`${PATH}/${USER_ID}`).send(USER_DATA);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(USER_ID);
  });

  test('Must not edit user by invalid id', async () => {
    const USER_DATA = {
      name: 'Dayane Barbosa',
      mail: 'dayane.barbosa@example.com',
      phone: '(11) 55444-5555',
    };
    USER_ID = 99;
    const res = await request(app).put(`${PATH}/${USER_ID}`).send(USER_DATA);
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('User does not exist');
  });
});

describe('Test verb DELETE at /users endpoint', () => {
  let USER_ID;

  beforeEach(async () => {
    const USER = {
      name: 'Lokinho',
      mail: 'lokinho@example.com',
      phone: '(12) 55555-5555',
    };
    const res = await request(app).post(`${PATH}`).send(USER);
    expect(res.status).toBe(201);
    USER_ID = res.body.id;
    return USER_ID;
  });

  test('Must delete user by id', async () => {
    const res = await request(app).delete(`${PATH}/${USER_ID}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('User deleted successfully');
  });

  test('Must not delete user by invalid id', async () => {
    USER_ID = 99;
    const res = await request(app).delete(`${PATH}/${USER_ID}`);
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('User does not exist');
  });
});
