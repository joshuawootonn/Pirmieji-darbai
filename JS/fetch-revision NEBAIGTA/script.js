const showPost = async () => {
  const response = await "https://jsonplaceholder.typicode.com/";
  const posts = await response.json(); // "/posts" yra endpoint

  console.log(posts);
};

await showPost();
