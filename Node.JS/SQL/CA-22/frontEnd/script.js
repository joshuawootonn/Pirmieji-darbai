document.getElementById("loginInput").addEventListener("submit", (event) => {
  event.preventDefault();

  fetch("http://localhost:5002/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: event.target.elements[0].value,
      password: event.target.elements[1].value,
    }),
    //cia matom, kad yra objektas, ne string'as. todel ir reikejo backEnd uzklausoj pateikt objekta
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

// fetch("http://localhost:5002/content/",{
//     headers:{ authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhQGIuY29tIiwiaWF0IjoxNjcyNzcxODExfQ.0XOPRw7hgVj03or0w_7nPQ7oYEjNzNNCiAT3NSnBpWs"
// }},)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))
