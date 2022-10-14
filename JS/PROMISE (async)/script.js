// 1. const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 5000);
// });

// promise.then(() => alert("Veikia!"));

// console.log(
//   "Sis kodas pasileis pirmas, nors yra paskutinis, tai buten asinchroniskumas"
// );

//2.
// const promise = new Promise((resolve, reject) => {
//   const randomTime = Math.round(Math.random() * 5) + 1;

//   setTimeout(() => {
//     if (randomTime === 1) {
//       reject();
//     } else {
//       resolve();
//     }
//   }, 5000);
// });

// promise.then(() => "This is message");
// promise.then((message) => alert(message));
// promise.catch(() => alert("oops, pazadas buvo atmestas"));

const pazadas = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

pazadas
  .then(() => "This is message")
  .then((message) => alert(message))
  .catch(() => alert("Oops, pažadas buvo atmestas"));
