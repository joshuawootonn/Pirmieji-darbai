const getNames = async () => {
  const request = await fetch("http://localhost:5001");
  const users = await request.json();

  createNameList(users);
};

getNames();

const createNameList = (users) => {
  console.log(users);

  const ulElement = document.createElement("ul");

  users.forEach((user) => {
    const liElement = document.createElement("li");

    liElement.innerText = user;

    ulElement.append(liElement);
    document.body.append(ulElement);
  });
};

const postNewName = async () => {
  const request = await fetch(`http://localhost:5001`, {
    method: "POST",
    headers: {
      name: "Aleksas",
    },
    body: JSON.stringify(name),
  });
};
postNewName();

const getPostNewName = () => {
  const formForName = document.createElement("form");
  const liElement = document.createElement("li");

  liElement.innerText = "Aleksas";

  formForName.append(liElement);
  document.body.append(formForName);
};
getPostNewName();
