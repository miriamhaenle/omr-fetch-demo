import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { getHarryPotterCharacter } from './api/fetchData';
import RickAndMortyCard from './components/RickAndMortyCard';
import DrinkCard from './components/DrinkCard';

const MainContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
`;

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
    <MainContainer>
      <RickAndMortyCard />
      {harryPotterCharacters &&
        harryPotterCharacters.map(() => {
          return 'Hier kommen Harry Potter Characters hin';
        })}
      <DrinkCard />
    </MainContainer>
  );
}

export default App;
