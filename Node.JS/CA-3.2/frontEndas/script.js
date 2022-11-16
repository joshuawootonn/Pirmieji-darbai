const HOSTNAME = "http://localhost:5000";
let users = [];
const nameListAfterSubmit = document.querySelector("#form-submit");

nameListAfterSubmit.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userNameInput = document.querySelector("#name-input");
  const userSurnameInput = document.querySelector("#surname-input");
  const userName = userNameInput.value.trim();
  const userSurname = userSurnameInput.value.trim();

  try {
    const response = await fetch(HOSTNAME, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName, surname: userSurname }),
    });
    users = await response.json();

    await renderNames();

    userNameInput.value = "";
    userSurnameInput.value = "";
  } catch (err) {
    alert(err);
  }
});

const renderNames = async (isInitialRender) => {
  if (isInitialRender) {
    const response = await fetch(HOSTNAME);
    users = await response.json();
  }

  const userList = document.querySelector("#user-list");
  userList.replaceChildren();

  users.forEach((user) => {
    const userListEl = document.createElement("li");

    userListEl.innerText = `${user?.name} ${user?.surname}`;

    userList.append(userListEl);
  });
};
renderNames(true);

// const renderNames = async () => {
//   const userList = document.querySelector("#user-list");
//   const response = await fetch(HOSTNAME);
//   const users = await response.json();

//   users.forEach((user) => {
//     const userListEl = document.createElement("li");

//     userListEl.innerText = `${user.name} ${user.surname}`;

//     userList.append(userListEl);
//   });
// };
// renderNames();
