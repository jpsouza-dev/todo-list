import { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { title } from "process";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  //Acessando o useContext
  const { tasks, setTasks } = useContext(TasksContext);

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("NAo é possivel adicionar uma tarefa com menos de 3 letras");
      return;
    }
    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
  }

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((tasks) => {
      if (taskId === tasks.id) {
        return {
          ...tasks,
          done: !tasks.done,
        };
      }
      return tasks;
    });
    setTasks(newTasks);
  }
  function handleRemoveTask(taskId: Number) {}

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Titulo da Tarefa"
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label
                className={task.done ? styles.done : ""}
                htmlFor={`task-${task.id}`}
              >
                {task.title}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
