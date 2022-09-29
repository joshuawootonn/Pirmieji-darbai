const drawL = (event) => {
  const sizeL = Number(event.target.value);
  const outputElement = document.getElementById("output");

  let output = " "; // tuscios kabutes reiskia 0, t.y. jei ieskosim lenght, tai rodys nuli
  for (i = 0; i < sizeL - 1; i++) {
    output += "<p>L</p>"; // geriau naudoti p elementa, nenaudot <br>
  }
  for (i = 0; i < sizeL; i++) {
    output += "L"; //+= reiskia, kad pradzioj jis sudeda (gauna suma), o tada paduoda atsakyma
  }
  console.log(output);
  outputElement.innerHTML = output;
};

document.getElementById("size").addEventListener("input", drawL);
