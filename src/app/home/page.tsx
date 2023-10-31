import React from "react";
import { Header } from "@/components/header/header";
import { Welcome } from "@/components/welcome/welcome";
import { Container, ContainerHome } from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <ContainerHome>
          <Welcome />
        </ContainerHome>
      </Container>
    </>
  );
}
