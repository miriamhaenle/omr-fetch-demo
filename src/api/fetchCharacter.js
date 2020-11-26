export async function getCharacter() {
  const result = await fetch('https://rickandmortyapi.com/api/character/1');
  const character = result.json();

  return character;
}
