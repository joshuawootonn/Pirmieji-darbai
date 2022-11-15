const HOSTNAME = "http://localhost:5000";

const nameListAfterSubmit = document.querySelector("#submit-button");

nameListAfterSubmit.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userNameInput = document.querySelector("#name-input");
  const userSurnameInput = document.querySelector("#surname-input");
  const userName = userNameInput.value.trim();
  const userSurname = userSurnameInput.value.trim();

  try {
    await fetch(HOSTNAME, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, userSurname }),
    });
    await renderNames();

    userNameInput.textContent = "";
    userSurnameInput.textContent = "";
  } catch (err) {
    alert(err);
  }
});

const renderNames = async () => {
  const userList = document.querySelector("#user-list");
  const response = await fetch(HOSTNAME);
  const users = await response.json();

  users.forEach((user) => {
    const userListEl = document.createElement("li");

    userListEl.innerText = `${user.name} ${user.surname}`;

    userList.append(userListEl);
  });
};
renderNames();
