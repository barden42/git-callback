const elements = ["FrUitS", "LeGUMeS", "AnimAuX", "VoiTURes", "Guuugbrubger"];

const toCamelCase = () => {
    //do something
}

const transform = (array, callback) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
};
const toLowerCase = (name) => {
  return name.toLowerCase();
};

const toUpperCase = (name) => {
  return name.toUpperCase();
};

//add another one

const tableauTransforme = transform(elements, toCamelCase);