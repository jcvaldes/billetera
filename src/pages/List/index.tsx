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
// import idGen from '../../utils/genIds';
import { v4 as uuid_v4 } from 'uuid';
import listOfMonths from '../../utils/months';

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
  // lo uso para levantar los datos de los archivos de repositorio
  const [data, setData] = useState<IData[]>([]);
  // quiero  un valor por defecto en el combo para el año y mes actual
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1),
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear()),
  );
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
  // const months = [
  //   { value: 1, label: 'Enero' },
  //   { value: 2, label: 'Febrero' },
  //   { value: 3, label: 'Marzo' },
  //   { value: 4, label: 'Abril' },
  //   { value: 5, label: 'Mayo' },
  //   { value: 6, label: 'Junio' },
  //   { value: 7, label: 'Julio' },
  //   { value: 8, label: 'Agosto' },
  //   { value: 9, label: 'Septiembre' },
  //   { value: 10, label: 'Octubre' },
  //   { value: 11, label: 'Noviembre' },
  //   { value: 12, label: 'Diciembre' },
  // ];
  // const years = [
  //   { value: 2018, label: 2018 },
  //   { value: 2019, label: 2019 },
  //   { value: 2020, label: 2020 },
  //   { value: 2021, label: 2021 },
  // ];
  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  }, []);
  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
    return uniqueYears.map((year) => {
      return { value: year, label: year };
    });
  }, [listData]);
  useEffect(() => {
    const filteredData = listData.filter((item) => {
      const date = new Date(item.date);
      const month = (date.getMonth() + 1).toString();
      const year = date.getFullYear().toString();
      return month === monthSelected && year === yearSelected;
    });
    // genero ids unicos a traves de una funcion generadora
    // const gen = idGen();
    const formattedData = filteredData.map((item) => {
      return {
        // id: String(gen.next().value),
        id: uuid_v4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recurrente' ? '#4E41F0' : '#F44C4E',
      };
    });
    // console.log(formattedData);

    setData(formattedData);
  }, [listData, monthSelected, yearSelected, data.length]);
  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        {/* <SelectInput options={months} onChange={(e) => console.log(e.target.value)} /> */}
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
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
        {data.map((item) => {
          return (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dataFormatted}
              amount={item.amountFormatted}
            />
          );
        })}
      </Content>
    </Container>
  );
};
export default List;
