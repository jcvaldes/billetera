import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  grid-area: CT;
  padding: 25px;
  height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
