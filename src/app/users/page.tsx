"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/header/header";
import Table from "@/components/table-user/table";
import { Div } from "./style";

export default function Home() {
  const [data, setData] = useState([]);

  const listarUsuario = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/listUser");
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Erro ao listar usuário:', error);
    }
  };

  useEffect(() => {
    listarUsuario();
  }, []);

  return (
    <>
      <Header />
      <Div>
        <Table data={data} />
      </Div>
    </>
  );
}
