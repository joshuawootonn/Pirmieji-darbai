const getCars = async () => {
  const request = await fetch("http://localhost:5002/cars");
  const cars = await request.json();

  createList(cars);
};

const createList = (cars) => {
  console.log(cars);

  const ulElement = document.createElement("ul");
  cars.forEach((car) => {
    const liElement = document.createElement("li");

    liElement.innerText = car;

    ulElement.append(liElement);
    document.body.append(ulElement);
  });
};
getCars();
