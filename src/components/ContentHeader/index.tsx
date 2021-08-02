import React from 'react';

import { Container, TitleContainer, Controls } from './styles';
const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controls>
        <button type="button">Boton A</button>
        <button type="button">Boton B</button>
      </Controls>
    </Container>
  );
};
export default ContentHeader;
