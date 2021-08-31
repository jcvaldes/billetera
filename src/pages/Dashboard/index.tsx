import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const options = [
    {
      value: 'Juan',
      label: 'Juan',
    },
    {
      value: 'Joaquin',
      label: 'Joaquin',
    },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B" >
        {/* onChange lo pongo vacio solo para que no de error por el momento */}
        <SelectInput options={options}  onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};
export default Dashboard;
