const elements = ["FrUitS", "LeGUMeS", "AnimAuX", "VoiTURes", "Guuugbrubger", "HuMAINs"];

const toCamelCase = () => {
    //do something
}

const toLowerCase = (name) => {
  return name.toLowerCase();
};

const toUpperCase = (name) => {
  return name.toUpperCase();
};

const transform = (array, callback) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
};

const tableauTransforme = transform(elements, toCamelCase);
