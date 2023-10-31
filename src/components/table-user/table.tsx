import React from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "./style";
import { deleteUser } from "@/services/deleteUserService";
import { ButtonDelete } from "../button-delete/button-delete";

const Table = ({ data }: { data: any }) => {
  let keys: string[] = [];
  if (data && data.length > 0) {
    keys = Object.keys(data[0]).filter(
      (key) => !["id", "password", "created_at", "updated_at"].includes(key)
    );
  }
  const deleteUsuario = async (idUser: any) => {
    const shouldDelete = window.confirm("Você deseja realmente deletar esse usuario?");
  
    if (shouldDelete) {
      await deleteUser("http://127.0.0.1:8000/api/deleteUser/" + idUser);
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
                <ButtonDelete onClick={() => deleteUsuario(obj.id)} />
              </STD>
            </STBodyTR>
          ))
        )}
      </STBody>
    </STable>
  );
};

export default Table;
