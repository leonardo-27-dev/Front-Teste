"use client";
import React, { useState } from "react";
import { Div, Input, FocusInput } from "./style";

export function Descricao() {
  const [descricao, setDescricao] = useState("");

  return (
    <Div>
      <Input
        className={descricao !== "" ? "hasValue" : ""}
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <FocusInput data-placeholder="Descrição" />
    </Div>
  );
}
