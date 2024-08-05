import { useContext, useState } from "react";
import { StatsCards } from "../StatsCard/StatsCards";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  // const [estado, funcaoParaAlterarOEstado] = useState(""); //estrutura Use State

  const { tasks } = useContext(TasksContext);
  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, tasks) => {
    if (!tasks.done) return total + 1;
    return total;
  }, 0);
  const totalDone = totalTasks - totalPending;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My todo</h1>
          <span>Bem vindo</span>
        </div>
        <div>
          <StatsCards title="Total de Tarefas" value={totalTasks}></StatsCards>
          <StatsCards
            title="Tarefas Pendentes"
            value={totalPending}
          ></StatsCards>
          <StatsCards title="Tarefas Concluidas" value={totalDone}></StatsCards>
        </div>
      </div>
    </header>
  );
};
