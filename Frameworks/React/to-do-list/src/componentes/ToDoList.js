import "./ToDoList.css";

const ToDoList = ({ tarefas, removerTarefa }) => {
    //retorna uma lista de tarefas
    return(
        //lista não ordenada
        <ul>
            {/* mapeia as tarefas e cria um item de lista para cada uma */}
            {tarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}
                    <button onClick={() => removerTarefa(index)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;
