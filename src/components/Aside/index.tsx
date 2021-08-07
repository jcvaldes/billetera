import React from 'react';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from './styles';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="logo mi billetera" />
        <Title>Mi Billetera</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink>
          <MdArrowDownward />
          Salidas
        </MenuItemLink>
        <MenuItemLink>
          <MdExitToApp />
          Salir
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};
export default Aside;
