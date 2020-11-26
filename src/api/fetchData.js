export async function getRickAndMortyCharacter() {
  const result = await fetch('https://rickandmortyapi.com/api/character/1');
  const character = result.json();

  return character;
}

export async function getHarryPotterCharacter() {
  const result = await fetch('http://hp-api.herokuapp.com/api/characters');
  const characters = result.json();
  return characters;
}

export async function getCocktailInfo() {
  const result = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11009'
  );
  const drinks = await result.json();
  const drink = drinks.drinks[0];

  const formattedDrink = {};
  return formattedDrink;
}
