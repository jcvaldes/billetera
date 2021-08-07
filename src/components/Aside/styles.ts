import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  /* color: ${(props) => props.theme.colors.white}; */
  grid-area: AS;
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 70px;
`;
export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;
export const LogImg = styled.img`
  height: 40px;
  width: 40px;
`;
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.info};
  cursor: pointer;
  text-decoration: none;
  margin: 7px 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;
