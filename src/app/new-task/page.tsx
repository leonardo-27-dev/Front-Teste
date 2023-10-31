"use client";
import React from "react";
import { Email } from "@/components/email/email";
import { Name } from "@/components/name/name";
import { ButtonRegister } from "@/components/button-register/button-register";
import { Container, ContainerLogin, Form, WrapLogin } from "./style";
import { useRouter } from "next/navigation";
import { CreateTask } from "@/components/create-task/create-task";
import { Descricao } from "@/components/text-area-task/text-area-task";
import { ButtonRegisterNewTask } from "@/components/button-register-new-task/button-register-new-task";
import { Header } from "@/components/header/header";

export default function NewTask() {
  const router = useRouter();

  const criarUsuario = async (event: any) => {
    const [descricao] = event.target;
    
    const body = {
      descricao: descricao.value,
      estado: 'Pendente',
      user_id: localStorage.getItem('user_id'),
    };
    
    try {
      const url = "http://127.0.0.1:8000/api/createTask";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
  
      if (response.ok) {
        router.push('/tasks')
      } 
    } catch (error) {
      console.error('Erro inesperado:', error);
    }
  };

  return (
    <><Header /><Container>
      <ContainerLogin>
        <WrapLogin>
          <Form
            onSubmit={(e) => {
              e.preventDefault(),
                criarUsuario(e);
            } }
          >
            <CreateTask />
            <Descricao />
            <ButtonRegisterNewTask />
          </Form>
        </WrapLogin>
      </ContainerLogin>
    </Container></>
  );
}
