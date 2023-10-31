import React from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "./style";
import { ButtonDelete } from "../button-delete/button-delete";
import { ButtonPending } from "../button-update-pending/button-pending";
import { ButtonDone } from "../button-update-finish/button-finish";
import { ButtonExecution } from "../button-update-execution/button-execution";
import { updateTask } from "@/services/updateTaskService";
import { deleteTask } from "@/services/deleteTaskService";

const TableTask = ({ data }: { data: any }) => {
  let keys: string[] = [];
  if (data && data.length > 0) {
    keys = Object.keys(data[0]).filter(
      (key) => !["id", "user_id", "created_at", "updated_at"].includes(key)
    );
  }

  const updateTaskPending = async (obj: any) => {
    const confirmed = window.confirm("Tem certeza de que deseja alterar o estado da tarefa para 'Pendente'?");
    if (confirmed) {
      const body = {
        estado: 'Pendente'
      };
      await updateTask("http://127.0.0.1:8000/api/updateTask/" + obj.id, body);
      window.location.reload();
    }
  };
  
  const updateTaskExecution = async (obj: any) => {
    const confirmed = window.confirm("Tem certeza de que deseja alterar o estado da tarefa para 'Em Execução'?");
    if (confirmed) {
      const body = {
        estado: 'Em Execução'
      };
      await updateTask("http://127.0.0.1:8000/api/updateTask/" + obj.id, body);
      window.location.reload();
    }
  };
  
  const updateTaskDone = async (obj: any) => {
    const confirmed = window.confirm("Tem certeza de que deseja alterar o estado da tarefa para 'Concluída'?");
    if (confirmed) {
      const body = {
        estado: 'Concluida'
      };
      await updateTask("http://127.0.0.1:8000/api/updateTask/" + obj.id, body);
      window.location.reload();
    }
  };

  const deleteTasks = async (obj: any) => {
    const shouldDelete = window.confirm("Você deseja realmente deletar essa tarefa?");
  
    if (shouldDelete) {
      await deleteTask("http://127.0.0.1:8000/api/deleteTask/" + obj.id);
      window.location.reload();
    }
  };
  

  return (
    <STable>
      <STHead>
        <STHeadTR>
          {keys.map((item, index) => (
            <STH key={item}>{item}</STH>
          ))}
          {keys.length > 0 && <STH key="actions">Ações</STH>}
        </STHeadTR>
      </STHead>
      <STBody>
        {data.length === 0 ? (
          <STBodyTR>
            <STD colSpan={keys.length + 1}>Nenhum dado encontrado</STD>
          </STBodyTR>
        ) : (
          data.map((obj: any) => (
            <STBodyTR key={obj.id}>
              {keys.map((item) => (
                <STD key={item}>{obj[item]}</STD>
              ))}
              <STD key="actions">
                <ButtonPending onClick={() => updateTaskPending(obj)} />
                <ButtonExecution onClick={() => updateTaskExecution(obj)} />
                <ButtonDone onClick={() => updateTaskDone(obj)} />
                <ButtonDelete onClick={() => deleteTasks(obj)} />
              </STD>
            </STBodyTR>
          ))
        )}
      </STBody>
    </STable>
  );
};

export default TableTask;
