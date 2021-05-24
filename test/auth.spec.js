// configurando firebase mock
// iniciando tests

import {
  loginUser,
  logOut,
  createUser,
} from '../src/controller/firebase-auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();

mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

describe('Create user', () => {
  it('Debería poder iniciar sesion', () => createUser('net@gmail.com', '12345678').then((user) => {
    expect(user.email).toBe('net@gmail.com');
  }));
});

describe('Login user', () => {
  it('Debería poder iniciar sesion', () => loginUser('net@gmail.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('net@gmail.com');
    }));
});

describe('Logout user', () => {
  it('Debería salir de sesión', () => {
    logOut().then((user) => {
      expect(user).toBe(null);
    });
  });
});
