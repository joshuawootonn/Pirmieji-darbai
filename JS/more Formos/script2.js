const clickName = document.body.querySelector("#click-name");

clickName.addEventListener("blur", (event) => {
  const nameA = event.target.value.trim();
  const outputElement = document.getElementById("result");
  if (nameA) {
    outputElement.innerText += `${nameA},`;
  }
});
