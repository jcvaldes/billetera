import React, { useEffect, useMemo } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import { useState } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

interface IRouteParams {
  match: {
    params: {
      // type tengo que especificar el parametro que recibi en la ruta en el archivo de rouutes
      type: string;
    };
  };
}
interface IData {
  id: string; // lo creo aleatoriamente porque en el repositorio no tiene id
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}
// match está disponible gracias al react-router-dom
const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  // useMemo: hook para memorizar un valor
  const { type } = match.params;
  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Salidas';
  }, [type]); // en el array puedo especificar una variable para  que actulice cuando un el valor de dicha variable cambia

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#F44C4E';
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);
  const months = [
    { value: 7, label: 'Julio' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Septiembre' },
  ];
  const years = [
    { value: 2020, label: 2020 },
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
  ];
  useEffect(() => {
    const response = listData.map(item => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recurrente' ? '#4E41F0' : '#F44C4E',
      }
    })
    setData(response);
  }, []);
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
        {
          data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dataFormatted}
              amount={item.amountFormatted}
            />
          ))

        }
      </Content>
    </Container>
  );
};
export default List;
