//paspaudus ant vardo, jis padideja ir pasidaro raudonas, centre
// document.querySelector("#my-name").addEventListener("click", (event) => {
//   event.target.style.textAlign = "center";
//   event.target.style.fontSize = "150px";
//   event.target.style.color = "red";
// });

//keliauja is kairiojo kampo virsaus i apatini desiniji
// document.querySelector("#button").addEventListener("click", (event) => {
//   event.target.style.position = "absolute";
//   event.target.style.paddingTop = "0";
//   event.target.style.paddingLeft = "0";
// });

// let isInOriginalPosition = true;

// let changePosition = (event) => {
//   event.target.style.cssText = isInOriginalPosition
//     ? "position:absolute; bottom:0; right:0;"
//     : "position:absolute; top:0; left:0;";
//   isInOriginalPosition = !isInOriginalPosition;
// };

// button.addEventListener("click", changePosition);

// keliauja is kampo i kampa pagal laikrodzio rodykle
// document.querySelector("#button").addEventListener("click", (event) => {
//   event.target.style.position = "absolute";
//   event.target.style.paddingTop = "0";
//   event.target.style.paddingLeft = "0";
// });

// let corner = 0;

// const cornerStyles = [
//   "position:absolute; top:0; right:0;",
//   "position:absolute; bottom:0; right:0;",
//   "position:absolute; bottom:0; left:0;",
//   "position:absolute; top:0; left:0;",
// ];

// const changePosition = (event) => {
//   if (corner < cornerStyles.length) {
//     event.target.style.cssText = cornerStyles[corner];
//     corner++;
//   }
//   if (corner === cornerStyles.length) {
//     corner = 0;
//   }
// };

// button.addEventListener("click", changePosition);

//keicia spalva, kai suvedi dvi raides - raudona, kai daugiau - melyna
let changeStyleByYourName = (event) => {
  let userName = event.target.value;

  if (userName.length < 3) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "blue";
  }
};

document
  .getElementById("name-change")
  .addEventListener("input", changeStyleByYourName);

// document.getElementById("name").addEventListener("input", (event) => {
//   const name = event.target.value;
//   document.body.style.backgroundColor = name.length < 3 ? "red" : "green";
// });
