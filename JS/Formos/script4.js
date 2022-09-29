document.querySelector("form").addEventListener("submit", nameFunction);

const nameFunction = (event) => {
  event.preventDefault();
  console.log(event);
};
