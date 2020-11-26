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
