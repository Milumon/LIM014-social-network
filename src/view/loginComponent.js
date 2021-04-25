export default () => {
  const viewLogin = `
        <h2>viewLogin WORKS</h2>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  return divElement;
};
