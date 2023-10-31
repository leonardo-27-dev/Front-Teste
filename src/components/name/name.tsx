"use client";
import React, { useState } from "react";
import { Div, Input, FocusInput } from "./style";

export function Name() {
  const [name, setName] = useState("");

  return (
    <Div>
      <Input
        className={name !== "" ? "hasValue" : ""}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FocusInput data-placeholder="Name" />
    </Div>
  );
}
