"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ContainerLogin = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: rgb(var(--background-start-rgb));
`;

export const WrapLogin = styled.div`
  width: 390px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  width: 100%;
`;
