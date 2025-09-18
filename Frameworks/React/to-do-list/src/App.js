import { useState } from "react";
import ToDoForm from "./componentes/ToDoForm";
import ToDoList from "./componentes/ToDoList";

const App = () => {
  //  lógica do componente
  const [tarefas, setTarefas] = useState([]);
  //estado para armazenamento da lista de tarefas

  const addTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
    //adiciona a nova tarefa ao array de tarefas, ...tarefas => copia todas as tarefas
    //que já estão adicionadas anteriormente
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
    //cria um novo vetor sem a tarefa que quero remover
    //filtro o array, removendo a posição index
  };

  //view do componentea
  return(
    <div>
      <h1>To-Do-List</h1>
      <ToDoForm addTarefa={addTarefa} /> 
      <ToDoList tarefas={tarefas} removerTarefa={removerTarefa} />
    </div>
  );
};

export default App;
//componente principal do meu aplicativo