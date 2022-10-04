const productsContainer = document.body.querySelector("#products-container");
const colorInput = document.body.querySelector("#color-input");
const headingElement = document.createElement("h1");
const userCustomColor = prompt("Iveskite savo spalva");
const colors = ["red", "green", "yellow", "blue"];
let colorChangeTimes = 0;

colors.push(userCustomColor);

colorInput.addEventListener("input", (event) => {
  //anonimine funkcija
  const userColorValue = event.target.value.trim().toLowerCase();
  const isValueColor = colors.includes(userColorValue);

  //boolean matys
  if (isValueColor) {
    colorChangeTimes++;
    headingElement.textContent = `Pakeitete ${colorChangeTimes}`;

    document.body.prepend(headingElement);

    productsContainer.style.border = `4px dotted ${userColorValue}`;
    console.log("Spalva nustatoma");
  }

  switch (userColorValue) {
    case "red":
      console.log("red");
      break;
    case "green":
      console.log("green");
      break;
    case "yellow":
      console.log("yellow");
      break;
    case "blue":
      console.log("blue");
      break;
    default:
      console.log("Nepriimtina spalva", userColorValue);
  }
});

//ToDo: switch conditions for colors, array of colors, how many times color changed
