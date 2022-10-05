// const alertNearestNumber = (event) => {
//   event.preventDefault();

//   const typeNumber = document.querySelector("#type-number") | 0;
//   const typeNumberAgain = document.querySelector("#type-number-again") | 0;

//   if (Math.abs(100 - typeNumber) > Math.abs(100 - typeNumberAgain)) {
//     alert(typeNumberAgain);
//   } else {
//     alert(typeNumber);
//   }

//   /// alertNearestNumber.addEventListener("submit", (event) => {
//   //alertNearesNumber(typeNumber, typeNumberAgain);
//   //});
// };

function alertNearesNumber(typeNumber, typeNumberAgain) {
  if (Math.abs(100 - typeNumber) > Math.abs(100 - typeNumberAgain)) {
    alert(typeNumberAgain);
  } else {
    alert(typeNumber);
  }
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  const typeNumber = Number(document.querySelector("#type-number").value);
  const typeNumberAgain = Number(
    document.querySelector("#type-number-again").value
  );
  alertNearesNumber(typeNumber, typeNumberAgain);
};

document.querySelector("form").addEventListener("submit", handleFormSubmit);
