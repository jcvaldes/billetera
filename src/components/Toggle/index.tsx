import React, { useState }  from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';



const Toggle: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const handleChange = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      {/* <Switch
        checked
        onChange={handleChange}
      /> */}
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
