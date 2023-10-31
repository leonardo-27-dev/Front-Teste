"use client";
import React, { useState } from "react";
import { Div, Input, FocusInput } from "./style";

export function Password() {
  const [password, setPassword] = useState("");

  return (
    <Div>
      <Input
        className={password !== "" ? "hasValue" : ""}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <FocusInput data-placeholder="Password" />
    </Div>
  );
}
