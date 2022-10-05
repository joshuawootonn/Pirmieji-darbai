const typeNumber = document.querySelector("#type-number") | 0;
const typeNumberAgain = document.querySelector("#type-number-again") | 0;

const alertNearestNumber = Number.addEventListener("submit", (event) => {
  event.preventDefault();

  if (Math.abs(100 - typeNumber) > Math.abs(100 - typeNumberAgain)) {
    alert(typeNumberAgain);
  } else {
    alert(typeNumber);
  }

  /// alertNearestNumber.addEventListener("submit", (event) => {
  //alertNearesNumber(typeNumber, typeNumberAgain);
  //});
});

//reikia, kad
