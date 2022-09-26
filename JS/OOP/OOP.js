function Phone(hardware, processor, screenSize) {
  //Phone yra objektas, labiau irankis sukurti iPhone
  this.harware = hardware;
  this.processor = processor;
  this.screenSize = screenSize;
}

const technology = "Intel";
const iPhone = new Phone(technology, "2,4GHz", 7.1); //kuriam kintamaji, kuris yra kviecia objekta Phone ir tampa pats objektu

console.log(iPhone);

const phones = [];
for (let i = 0; i < 5; i++) {
  const phone = new Phone(technology, `${i}GHz`, i * 2);

  phones.push(phone);
}

console.log(phones);
