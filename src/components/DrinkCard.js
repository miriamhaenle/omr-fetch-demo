import { useEffect, useState } from 'react';
import { getCocktailInfo } from '../api/fetchData';
import styled from 'styled-components/macro';

const DrinkContainer = styled.div`
  background: #15356e;
  border-radius: 15px;
  color: white;
  font-family: sans-serif;
  padding-bottom: 5px;
  text-align: center;
  width: 50%;
`;

const Name = styled.h2`
  font-size: 1.2rem;
`;
const Glass = styled.p`
  font-size: 0.8rem;
`;
const Instructions = styled.p`
  font-size: 0.8rem;
`;
const Image = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
`;

export default function DrinkCard() {
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    async function doGet() {
      const drink = await getCocktailInfo();
      setDrink(drink);
    }
    doGet();
  }, []);

  return (
    <>
      {drink && (
        <DrinkContainer>
          <Image src={drink.image} />
          <Name>{drink.name}</Name>
          <Glass>{drink.glass}</Glass>
          <Instructions>{drink.instructions}</Instructions>
        </DrinkContainer>
      )}
    </>
  );
}
