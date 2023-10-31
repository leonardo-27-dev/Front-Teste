"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/header/header";
import TableTask from "@/components/table-task/table";
import { Div } from "./style";
import { ButtonNewTask } from "@/components/button-new-task/button-new-task";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);

  const listarUsuario = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/listTask");
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Erro ao listar usuário:", error);
    }
  };

  const newTask = () => {
    router.push('/new-task')
  };

  useEffect(() => {
    listarUsuario();
  }, []);

  return (
    <>
      <Header />
      <ButtonNewTask onClick={() => newTask()} />
      <Div>
        <TableTask data={data} />
      </Div>
    </>
  );
}
