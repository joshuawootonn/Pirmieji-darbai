const patchButton = document.querySelector("#patch-button");

const onPatch = async () => {
  try {
    const updatedPost = {};
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PATCH",
      }
    );

    const isPostPatch = response.ok;

    if (isPostDelete) {
      document.body.querySelector("#users-container").innerHTML = ""; // vietoj innerHtml galima textContect
    }
  } catch (error) {
    console.error(error);
  }
};
patchButton.addEventListener("click", onPatch);
