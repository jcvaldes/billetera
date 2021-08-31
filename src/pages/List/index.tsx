import React, { useMemo } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match: {
    params: {
      // type tengo que especificar el parametro que recibi en la ruta en el archivo de rouutes
      type: string;
    };
  };
}
// match está disponible gracias al react-router-dom
const List: React.FC<IRouteParams> = ({ match }) => {
  // useMemo: hook para memorizar un valor
  const { type } = match.params;
  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Salidas';
  }, [type]); // en el array puedo especificar una variable para  que actulice cuando un el valor de dicha variable cambia

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#F44C4E';
  }, [type]);

  const months = [
    { value: 7, label: 'Julio' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Septiembre' },
  ];
  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];
  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recurrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuales
        </button>
      </Filters>
      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Cuenta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
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
