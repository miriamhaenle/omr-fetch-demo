import { useEffect, useState } from 'react';
import { getHarryPotterCharacter } from './api/fetchData';
import RickAndMortyCard from './components/RickAndMortyCard';
import DrinkCard from './components/DrinkCard';

function App() {
  const [harryPotterCharacters, setHarryPotterCharacters] = useState([]);

  useEffect(() => {
    async function doGet() {
      const characters = await getHarryPotterCharacter();
      setHarryPotterCharacters(characters);
    }
    doGet();
  }, []);

  return (
    <>
      <RickAndMortyCard />
      {harryPotterCharacters &&
        harryPotterCharacters.map(() => {
          return 'Hier kommen Harry Potter Characters hin';
        })}
      <DrinkCard />
    </>
  );
}

export default App;
