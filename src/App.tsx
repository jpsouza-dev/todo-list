import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { StatsCards } from "./components/StatsCard/StatsCards";
import { Tasks } from "./components/Tasks/Tasks";
import { Memoization } from "./components/Conceps/Memoization";
import { TasksProvider } from "./context/TasksContext";
function App() {
  //useEffect(() => {}, []);
  //O useEffect sera disparado sempre que alguma variavel do array de
  //dependencias for alterado
  //Porem por padrao, sempre o useEffect sera disparado apos a montagem do componente    (componenteDidMount)
  return (
    <TasksProvider>
      <Header></Header>
      <Tasks></Tasks>
    </TasksProvider>
  );
}

export default App;
