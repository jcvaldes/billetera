import React, { useMemo } from 'react';
import { Container, Profile, Welcome, UserName } from './styles';
import Toggle from '../Toggle'
import { emojis } from '../../utils/emojis';

const MainHeader: React.FC = () => {
  // useMemo: hook q se dispara cuando el valor cambia
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    // console.log(indice);
    return emojis[indice];
  }, []);
  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Hola, {emoji}</Welcome>
        <UserName>Juan Carlos</UserName>
      </Profile>
    </Container>
  );
};
export default MainHeader;
