import { logOut } from "../controller/auth.js";
import { post } from "../controller/post.js";

export default () => {
  const viewTimeLine = `
    <section class = "user_header">
    <h1> FindMyPaw </h1>
    <figure> 
    <img class= "img_profile" src = "">
    <img class= "img_icon">
    </figure>
    </section>
    <section class = "user_opcion">
    <img class= "img_search" src = "">
    <img class= "img_home" src = "">
    <img class= "img_share" src = "">
    </section>
    <section id ="container-share" class="hide">
      <form class="form-share">
      <input type="text" class="description" placeholder="Add" required>
      <button type="input"> foto </button>
      <button type="submit" class="btn-share"> Compartir </button>
      </form>
    </section>
    <section class="container-post">
    </section> 
  `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewTimeLine;

  const btnSingOut = divElement.querySelector("button");

  btnSingOut.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("LOG OUT ENVIADO");

    logOut().then(() => {
      window.location.hash = "#/login";
    });
  });

  const btnShare = divElement.querySelector(".btn-share");
  btnShare.addEventListener("click", (e) => {
    e.preventDefault();
    const inputContent = divElement.querySelector(".description").value;
    const formShare = divElement.querySelector(".form-share");
    formShare.reset();
    post("ecFTadaE4NPmoXH5xjzjbVpiTHJ2", inputContent)
      .then((refDoc) => {
        console.log(`Id del post => ${refDoc.id}`);
      })
      .catch((error) => {
        console.log(`Error creaando el post => ${error}`);
      });
  });

  return divElement;
};
