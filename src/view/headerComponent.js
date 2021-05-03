export default () => {
  const viewHeader = `
  <header>
  <h1> FindMyPaw </h1>
  <img src="" class="title"> 
</header>
  <nav>
  <ul>
    <li><a href="#/buscar">Buscar</a></li>
    <li><a href="#/timelime">Home</a></li>
    <li><a href="#/post">Compartir</a></li>
  </ul>
</nav>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHeader;

  return divElement;
};
