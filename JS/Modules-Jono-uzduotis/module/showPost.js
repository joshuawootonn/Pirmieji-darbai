const showPost = (post) => {
  const postContainer = document.querySelector("#postContainer");
  const postTitle = document.querySelector("#postTitle");
  const postBody = document.querySelector("#postBody");
  const updatePostButton = document.querySelector("#updatePostButton");

  postContainer.style.visibility = "visible";
  updatePostButton.style.visibility = "visible";

  postTitle.innerText = post.title;
  postBody.innerText = post.body;
};

export { showPost };
