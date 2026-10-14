"use client"
import { useEffect, useState } from "react";
import OlaMundo from "./components/OlaMundo";
import Saudacao from "./components/Saudacao";
import styles from "./page.module.css";

export default function Home() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    console.log("Número de tarefas: ", tarefas.length);
  }, [tarefas]);

  function adicionarTarefa() {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  }

  function removerTarefa(index) {
    const tarefasNovas = tarefas.filter((t, i) => i !== index);
    setTarefas(tarefasNovas);
  }

  return (
    <main>
      <h1> Testando NextJS </h1>
      <OlaMundo />
      <Saudacao nome="Catarina" />

      <section>
        <h2> Lista de tarefas </h2>
        <input type="text" value={tarefa} onChange={(t) => setTarefa(t.target.value)} placeholder="Digite uma tarefa" />

        <button onClick={adicionarTarefa}> Adicionar </button>

        <ul>
          {tarefas.map((t, index) => (
            <li key={index}> 
              {t} 
              <button onClick={() => removerTarefa(index)}> Remover </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
