export default () => {
  const viewRegister = ` 
      <h2>viewregister WORKS</h2>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;

  return divElement;
};
