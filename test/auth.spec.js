// configurando firebase mock
// iniciando tests

import {
  loginUser,
  logOut,
  createUser,
  signInGoogle,
  sendEmail,
} from '../src/controller/firebase-auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();

mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

describe('Métodos de autenticación', () => {
  it('Debería poder registrarse con correo y contraseña', () => createUser('net@gmail.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('net@gmail.com');
    }));

  it('Debería poder iniciar sesion con correo y contraseña', () => loginUser('net@gmail.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('net@gmail.com');
    }));
  it('Debería salir de sesión y el usuario retornar null', () => {
    logOut().then((user) => {
      expect(user).toBe(null);
    });
  });
  it('Debería ser google.com', () => {
    signInGoogle().then((google) => {
      expect(google.providerData[0].providerId).toBe('google.com');
    });
  });
});
