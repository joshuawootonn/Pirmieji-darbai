const getTodos = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await request.json();
  console.log(response);

  return response;
};

const createArticle = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //uzklausa i nuoroda
    // method: "POST",
    method: "GET",
    // body: JSON.stringify({
    //   // ka noriu persiust i serveri, visada rasomas kai yra "POST"
    //   title: "foo", //cia priskiriam reiksme
    //   body: "bar",
    //   userId: 1,
    // }),
  });

  const response = await request.json();
  console.log(response);
};

createArticle();

createArticle();

getTodos(); //kai dirbi moduly cia reiktu rasyt await

console.log(1);
