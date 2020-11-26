import styled from 'styled-components/macro';

const CharacterContainer = styled.div`
  background: #740001;
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
const House = styled.p`
  font-size: 0.8rem;
`;
const Image = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
`;

export default function HarryPotterCard({ character }) {
  return (
    <CharacterContainer>
      <Image src={character.image} />
      <Name>{character.name}</Name>
      <Species>{character.species}</Species>
      <House>{character.house}</House>
    </CharacterContainer>
  );
}
