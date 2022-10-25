const state = {};

const createCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "isVipCheckbox");
  document.body.append(checkbox);

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", "isVipCheckbox");
  checkboxLabel.innerText = "VIP";
  document.body.append(checkboxLabel);
};

const createSearchForm = () => {
  const searchForm = document.createElement("input");
  searchForm.setAttribute("type", "search");
  searchForm.setAttribute("id", "search");
  searchForm.setAttribute("name", "search");
  document.body.appendChild(searchForm);

  const searchButton = document.createElement("button");
  searchButton.innerHTML = "Search for name";
  searchButton.setAttribute("id", "searchButton");

  const form = document.createElement("form");
  form.append(searchForm, searchButton);
  document.body.append(form);
};

const createTable = () => {
  const userId = document.createElement("th");
  userId.innerText = "ID";

  const userImg = document.createElement("th");
  userImg.innerText = "Image";

  const userFirstName = document.createElement("th");
  userFirstName.innerText = "First name";

  const userLastName = document.createElement("th");
  userLastName.innerText = "Last name";

  const userCity = document.createElement("th");
  userCity.innerText = "City";

  const userFavouriteColor = document.createElement("th");
  userFavouriteColor.innerText = "Fav_color";

  const tableTR = document.createElement("tr");
  tableTR.append(
    userId,
    userImg,
    userFirstName,
    userLastName,
    userCity,
    userFavouriteColor
  );

  const tableThead = document.createElement("thead");
  tableThead.append(tableTR);

  const table = document.createElement("table");
  table.append(tableThead, document.createElement("div"));
  document.body.append(table);
};

const populateTable = (robots) => {
  const divElement = document.querySelector("div");
  divElement.innerHTML = "";

  robots.forEach((robot) => {
    const id = document.createElement("td");
    id.innerText = robot.id;

    const img = document.createElement("img");
    img.src = robot.img;
    img.setAttribute("alt", "UserPicture");
    const image = document.createElement("td");
    image.append(img);

    const [name, surname] = robot.name.split(" ");

    const firstName = document.createElement("td");
    firstName.innerText = name;

    const lastName = document.createElement("td");
    lastName.innerText = surname;

    const city = document.createElement("td");
    city.innerText = robot.city;

    const favColor = document.createElement("td");
    favColor.innerText = robot.fav_color;

    const tr = document.createElement("tr");
    tr.append(id, img, firstName, lastName, city, favColor);
    divElement.append(tr);
  });
};

createCheckbox();
createSearchForm();
createTable();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const searchString = document.getElementById("search").value.toLowerCase();
  populateTable(
    state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchString)
    )
  );
});

document.getElementById("isVipCheckbox").addEventListener("change", (event) => {
  const filteredRobots = event.target.checked
    ? state.robots.filter((robot) => robot.vip)
    : state.robots;
  populateTable(filteredRobots);
});

const fetchData = async () => {
  try {
    let response = await fetch("https://magnetic-melon-yam.glitch.me");
    if (response.ok) {
      state.robots = await response.json();
      populateTable(state.robots);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchData();
