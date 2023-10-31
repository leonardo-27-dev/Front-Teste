"use client";
import React, { useState } from "react";
import { Div, Input, FocusInput } from "./style";

export function Email() {
  const [email, setEmail] = useState("");

  return (
    <Div>
      <Input
        className={email !== "" ? "hasValue" : ""}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FocusInput data-placeholder="Email" />
    </Div>
  );
}
