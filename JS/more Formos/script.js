// const drawL = (event) => {
//   const sizeL = Number(event.target.value);
//   const outputElement = document.getElementById("output");

//   let output = " "; // tuscios kabutes reiskia 0, t.y. jei ieskosim length, tai rodys nuli
//   for (i = 0; i < sizeL - 1; i++) {
//     output += "<p>L</p>"; // geriau naudoti p elementa, nenaudot <br>
//   }
//   for (i = 0; i < sizeL; i++) {
//     output += "L"; //+= reiskia, kad pradzioj jis sudeda (gauna suma), o tada paduoda atsakyma
//   }
//   console.log(output);
//   outputElement.innerHTML = output;
// };

// document.getElementById("size").addEventListener("input", drawL);

const drawC = (event) => {
  const sizeC = Number(event.target.value);
  const outputElement = document.getElementById("output");

  let output = " ";
  for (i = 0; i < sizeC; i++) {
    output += "C";
  }
  for (i = 0; i < sizeC - 1; i++) {
    //-1 tam, kad butu iskaiciuotos to eilutes, kur C raides eina eile virsuj ir apacioj
    output += "<p>C</p>"; //C bus rasomi kiekviena raide atskiroj eilutej, break'ai daromi
  }
  for (i = 0; i < sizeC; i++) {
    output += "C";
  }
  console.log(output);
  outputElement.innerHTML = output;
};

document.getElementById("size").addEventListener("input", drawC);
