export default () => {
  const viewLogin = `
  <section class="logIn">
    <header>
      <img src="" class="title">
      <p class="text">¡ Find my Pawn !</p>
    </header>
    <form>
      <input type="email" id="email" placeholder="E-mail" required />
      <input type="password" id="password" pattern="[a-zA-Z0-9]{8,20}" placeholder="Password" required />
      <button type="submit" class=""><a href="#/home">Log in</a></button>
    </form>
    <p class="text">or enter with ...</p>
    <section class="option">
      <img src="" class="gmail">
      <img src="" class="facebook">
    </section>
    <p class="text">¿Don't you have an account in Find my Pawn?</p>
    <button type="submit" class="newAccount"><a href="#/signUp">Create an account</a></button>
  </section>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  return divElement;
};
