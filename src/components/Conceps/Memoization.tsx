import React, { useCallback, useMemo, useState } from "react";

interface MemoizationProps {
  financiaLData: {
    income: number[];
    outcome: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financiaLData }) => {
  //estado que define se os valores devem ser mostrado ou nao
  const [showValues, setshowValues] = useState(true);

  const totalIncomes = useMemo(() => {
    return financiaLData.income.reduce((total, income) => {
      return (total += income);
    }, 0);
  }, [financiaLData.income]);
  //useMemo serve para evitar que as coisas sejam refeitas/ ele memoriza o que esta sendo calculado
  const totalOutcomes = useMemo(() => {
    return financiaLData.outcome.reduce((total, outcome) => {
      return (total += outcome);
    }, 0);
  }, [financiaLData.outcome]);

  const aplicarDesconto = useCallback(
    (desconto: number) => {
      return totalOutcomes * (1 - desconto);
    },
    [totalOutcomes]
  );
  return (
    <div>
      <h1>Memoization</h1>
      <h2>useMemo</h2>

      <p>{`Total de Receitas : R$ ${showValues ? totalIncomes : `XXX`}`}</p>
      <p>{`Total de Depositos : R$ ${showValues ? totalOutcomes : `XXX`}`}</p>
      <br />
      <br />
      <button onClick={() => setshowValues(!showValues)}>
        {showValues ? "Ocultar valores" : "Mostrar Valores"}
      </button>
    </div>
  );
};
