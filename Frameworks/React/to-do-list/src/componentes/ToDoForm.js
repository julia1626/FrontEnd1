import "./ToDoForm.css"

//Componente para criar o formulário

import { useState } from "react"

//função para adicionar uma nova tarefa
const ToDoForm = ({addTarefa}) => {
    //função para armazenar o valor do input -> UseState
    const [tarefa, setTarefa] = useState("");
    // definir o useState => usa a memoria local do navegador 
    // para armazenar as mudanças de estado
    //[]primeiro campo armazena as tarefas, 
    // segundo campo arazena as mudanças de estado

    const handleSubmit = (e) => {
        //impedir o funcionamento padrão do botão submit
        e.preventDefault(); //não permite o recarregamento da página
        //verifica se o campo não esta vazio
        if(tarefa.trim() !== "") {
            //adicionar a tarefa ao vetor de tarefas
            addTarefa(tarefa);
            //limpa o campo de input
            setTarefa("");
        }
    };
    //view
    return (
        //formulário para tarefas
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Inserir Nova Tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button className="btnEnviar" type="submit">Adicionar Tarefa</button>
        </form>
    );
};

export default ToDoForm;
//componente para criar um formulário para inserir uma nova tarefa
//pode ser reutilizado em outros componentes(export)