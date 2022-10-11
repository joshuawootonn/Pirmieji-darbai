class Product {
  price;
  unitsAvailable;

  constructor(price, unitsAvailable) {
    this.price = price; //visada bus rasoma constructor - tai classiu dalis. ne visada butina ji nurodyt, nes kartais pagal nutylejima jis taikomas.
    this.unitsAvailable = unitsAvailable;
  }

  getSumRevenue() {
    return this.price * this.unitsAvailable;
  }
}

const shirt = new Product(50, 150); //paconsoline matysim 150 (rodys unitsAvaliable)

console.log(shirt.getSumRevenue());

//Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem
//stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą,
//pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS
//metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo;
//pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite
//objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę.
//Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje
//išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

class Person {
  name;
  surname;

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  addNameSurname() {
    const nameColumn = document.querySelector("#name-column");
    const surnameColumn = document.querySelector("#surname-column");
  }
}

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.addToTable = function () {
    const nameColumn = document.createElement("td");
    nameColumn.textContent = this.name;
    const surnameColumn = document.createElement("td");
    surnameColumn.textContent = this.surname;
    const tr = document.createElement("tr");
    tr.append(nameColumn, surnameColumn);
    document.querySelector("table > tbody").append(tr);
  };
}

const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullname = document.getElementById("fullname").value;
  const [name, surname] = fullname
    .split(" ")
    .map((namePart) => capitalize(namePart.trim()));

  const person = new Person(name, surname);
  person.addToTable();
});
