export const renderHome = (req, res) => {
  const gabriele = {
    name: "Gabriele",
    age: 31,
    adress: "gabriele@barsukova.com",
  };

  const number = +req.query.number;
  const countdownNumber = +req.query.countdownNumber;

  const userIpAdress =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.render("index", {
    title: "codeacademy",
    pageName: "Home",
    userIpAdress,
    number,
    countdownNumber,
    gabriele,
  });
};
