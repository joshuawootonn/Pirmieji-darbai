const renderUserCard = (user) => {
  const createdImg = document.createElement("img");

  createdImg.src = user.picture.large;
  createdImg.alt = `${user.name.first} profile picture`;

  const intro = document.createElement("h4");
  intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;

  const contacts = document.createElement("h5");
  contacts.innerText = user.email;

  const createdCard = document.createElement("div");
  createdCard.append(createdImg, intro, contacts);
  document.body.append(createdCard);
};

// const getUser = async () => {
//   const response = await fetch("https://randomuser.me/api/");

//   const user = await response.json();

//   return user;
// };

// const user = getUser();
// console.log(user);

const fetchRandomUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");

    if (response.ok) {
      const data = await response.json();
      renderUserCard(data.results[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchRandomUser();
