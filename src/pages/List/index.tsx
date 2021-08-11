import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
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
      <ContentHeader title="Salidas" lineColor="#F44C4E">
        <SelectInput options={options} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">Recurrentes</button>
        <button type="button" className="tag-filter tag-filter-eventual">Eventuales</button>
      </Filters>
      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

      </Content>
    </Container>
  );
};
export default List;
