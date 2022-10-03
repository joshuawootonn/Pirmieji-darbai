const heading = document.querySelector("#seo-heading");

const firstName = prompt("Your name");
heading.textContent = firstName;

const lastNameInput = document.body.querySelector("#last-name-input");

lastNameInput.addEventListener("keydown", (event) => {
  const lastName = event.target.value.trim();

  heading.textContent = `${firstName} ${lastName}`;
});

const onSubmit = (event) => {
  event.preventDefault();
  alert("submitedSuccesfully");
};

const userDataForm = document.body.querySelector("#user-data-form");

userDataForm.addEventListener("submit", (event) => {
  event.preventDefault(); //tipiskai addEventListener arba onsubmit atributas buna. Abieju nerekomenduotina, nes per daug identiskos logikos bus, pavyzdziui: event.preventDefault()

  const favouriteNumber = document.body.querySelector("#favourite-number");

  console.log("Vartotojas iveda duomenis");
});
