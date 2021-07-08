import React, { useState }  from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';


const Toggle: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const handleChange = () => {
    debugger
    setToggle(!toggle);
  };

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={toggle}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleChange}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};
export default Toggle;
