import React, { Children, createContext, useEffect, useState } from "react";

export interface Task {
  title: string;
  done: boolean;
  id: number;
}

interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TasksContext = createContext({} as TasksContextData);

interface TasksProvidersProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProvidersProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const tasksOnLocalStoraqe = localStorage.getItem("tasks");
    if (tasksOnLocalStoraqe) {
      setTasks(JSON.parse(tasksOnLocalStoraqe));
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
