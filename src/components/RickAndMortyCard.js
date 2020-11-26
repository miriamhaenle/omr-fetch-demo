import { useEffect, useState } from 'react';
import { getRickAndMortyCharacter } from '../api/fetchCharacter';
import styled from 'styled-components/macro';

const CharacterContainer = styled.div`
  background: #15356e;
  border-radius: 15px;
  color: white;
  font-family: sans-serif;
  padding-bottom: 5px;
  text-align: center;
  width: 33%;
`;

const Name = styled.h2`
  font-size: 1.2rem;
`;
const Species = styled.p`
  font-size: 0.8rem;
`;
const Origin = styled.p`
  font-size: 0.8rem;
`;
const Image = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
`;

export default function RickAndMortyCard() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function doGet() {
      const character = await getRickAndMortyCharacter();
      setCharacter(character);
    }
    doGet();
  }, []);

  return (
    <>
      {character && (
        <CharacterContainer>
          <Image />
          <Name></Name>
          <Species></Species>
          <Origin></Origin>
        </CharacterContainer>
      )}
    </>
  );
}
