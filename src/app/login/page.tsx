"use client"
import React from "react";
import { Email } from "@/components/email/email";
import { Password } from "@/components/password/password";
import { Container, ContainerLogin, Form, WrapLogin } from "./style";
import { useRouter } from "next/navigation";
import { ButtonAccount } from "@/components/button-create-account/button-criar-conta";
import { ButtonLogin } from "@/components/button-login/button-login";
import { Welcome } from "@/components/welcome/welcome";

export default function Login() {
  const router = useRouter()

  const login = async (event: any) => {
    const [email, password] = event.target;
    
    const usuario = {
      email: email.value,
      password: password.value
    };
    
    try {
      const url = "http://127.0.0.1:8000/api/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      });
      
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('user_id', data.id); 
        router.push('/home'); 
      } else {
        window.alert('Você não possui uma conta! Crie uma clicando em Create Account');
      }
      

    } catch (error) {
      console.error('Erro inesperado:', error);
    }
  };

  return (
    <Container>
      <ContainerLogin>
        <WrapLogin>
          <Form onSubmit={(e) => {
            e.preventDefault(),
            login(e)
          }}>
            <Welcome />
            <Email />
            <Password />
            <ButtonLogin />
            <ButtonAccount />
          </Form>
        </WrapLogin>
      </ContainerLogin>
    </Container>
  );
}
