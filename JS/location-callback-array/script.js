const alertName = (text) => {
  alert(text);
};

const consoleName = (text) => {
  console.log(text);
};

const coreFunction = (name, callback) => {
  const capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // charAt yra string metodas, tinka tik stringams. pažymi (šiuo atveju) pirmą raidę, ją padidins su upperiu; kitas raides sumažina su loweriu; sujungia visas raides
  callback(capitalizedName);
};

coreFunction("peTras", consoleName);
