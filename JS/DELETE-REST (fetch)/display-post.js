const displayPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const paragraphElement = document.createElement("p");
  const randomNumber = Math.round(Math.random() * 100);
  const post = posts[randomNumber];

  paragraphElement.textContent = JSON.stringify(post);

  document.body.querySelector("#users-container").append(paragraphElement);
};

export { displayPost };
