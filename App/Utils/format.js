const formatNumberPokemon = index => {
  if (index < 10) {
    return `#00${index}`;
  } else if (index >= 10 && index <= 99) {
    return `#0${index}`;
  } else {
    return `#${index}`;
  }
};
module.exports = {
  formatNumberPokemon
};
