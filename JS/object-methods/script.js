const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();

const firstPost = posts[0];
console.log(firstPost);

//kaip gauti objekto parametru pavadinimus?
const firstPostParams = Object.keys(firstPost); //keys metodas. didzioji dauguma eina per objects
console.log(firstPostParams);

//parametro ir reiksmes deriniai; patalpina reiksmes i tokias "dezutes"
console.log(Object.entries(firstPost));
