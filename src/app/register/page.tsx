"use client";
import React from "react";
import { Email } from "@/components/email/email";
import { Password } from "@/components/password/password";
import { Name } from "@/components/name/name";
import { ButtonRegister } from "@/components/button-register/button-register";
import { ButtonHasAccont } from "@/components/button-has-account/button-has-account";
import { Container, ContainerLogin, Form, WrapLogin } from "./style";
import { CreateAccont } from "@/components/create-accont/create-accont";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const criarUsuario = async (event: any) => {
    const [nome, email, password] = event.target;
    
    const usuario = {
      nome: nome.value,
      email: email.value,
      password: password.value
    };
    
    try {
      const url = "http://127.0.0.1:8000/api/createUser";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      });
  
      if (response.ok) {
        console.log('Usuário criado com sucesso!');
      } else {
        console.error('Falha ao criar o usuário');
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
    }
  };

  return (
    <Container>
      <ContainerLogin>
        <WrapLogin>
          <Form
            onSubmit={(e) => {
              router.push("/login"), e.preventDefault(),
              criarUsuario(e)
              ;
            }}
          >
            <CreateAccont />
            <Name />
            <Email />
            <Password />
            <ButtonRegister />
            <ButtonHasAccont />
          </Form>
        </WrapLogin>
      </ContainerLogin>
    </Container>
  );
}
