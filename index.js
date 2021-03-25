const elements = ["FrUitS", "LeGUMeS", "AnimAuX", "VoiTURes"];

// function de heaut niveau "transform"
// la fonction permet de parcourir le tableau
// appliquer une transformation sur tous les elements du tableaux
// retourne un nouveau tableau contenant les elements tranformés

// en minuscule
// en majuscule
// camel case

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

const tableauTransforme = transform(elements, toUpperCase);