import React, { useState }  from 'react';
import { Container, ToggleLabel } from './styles';
import Switch from 'react-switch';

const Toggle: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const handleChange = () => {
    debugger
    setToggle(!toggle);
  };

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <Switch
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
