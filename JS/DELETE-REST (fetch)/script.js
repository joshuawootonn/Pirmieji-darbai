import { displayPost } from "./display-post.js";
const deleteButton = document.querySelector("#delete-button");

await displayPost(); //sitoj vietoj jis prades veikt, jei mum reik, kad kitoj vietoj veiktu tai tiesiog kvieciam kitoj vietoj
//await, kad greiciau veikt

const onDelete = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  const isPostDelete = response.ok;

  if (isPostDelete) {
    document.body.querySelector("#users-container").innerHTML = ""; // vietoj innerHtml galima textContect
  }
};
deleteButton.addEventListener("click", onDelete);
