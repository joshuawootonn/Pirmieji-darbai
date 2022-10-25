import { getPost } from "./module/getPost.js"; //reik rasyt .js nes gali nematyt importo!!!!
import { showPost } from "./module/showPost.js";
import { updatePost } from "./module/updatePost.js";

const form = document.querySelector("#getPostNumberForm");

const updatePostButton = document.querySelector("#updatePostButton");
updatePostButton.addEventListener("click", updatePost);

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const postNumber = +document.querySelector("#postNumberInput").value;

  if (typeof postNumber === "number" && !Number.isNaN(postNumber)) {
    const post = await getPost(postNumber);

    showPost(post);
  }
});
// Iš jau naudoto https://jsonplaceholder.typicode.com/ fiktyvaus API back-end atvaizduoti postą
// nr. X (vartotojas įveda input  laukelyje skaičių (prisiminkit, kaip tikrinti)) ir prie posto input
// laukelį - pakeitus jame reikšmę, keičiasi ir posto aprašymas (prisiminkit, kokį HTTP metodą naudoti).
