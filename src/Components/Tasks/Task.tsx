import { useState } from "react";
import styles from "./styles.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Task: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);
  return (
    <section className={styles.container}>
      <form
        //?   uma forma mais reduzida no "script.txt"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(taskTitle);

          if (taskTitle.length <= 3) {
            alert("Não é possivel adicionar uma tarefa com menos de 3 letras!");
            return;
          }
          // ^ adicione tarefa ^
          setTasks({
            ...tasks,
          });
        }}
      >
        <div>
          <label htmlFor="task-tittle">Adiconar Tarefa</label>
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
        <li>
          <input type="checkbox" />
          Tarefa 01
        </li>
        <li>
          <input type="checkbox" />
          Tarefa 02
        </li>
      </ul>
    </section>
  );
};
