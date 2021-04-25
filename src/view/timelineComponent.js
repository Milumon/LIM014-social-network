export default () => {
  const viewHome = ` 
    <h2>WORKS</h2>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  return divElement;
};
