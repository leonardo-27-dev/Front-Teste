import React from "react";
import { Div, Span, A } from './style'

export function ButtonAccount() {
    const text = "Don't have an account?"
    return (
        <Div>
            <Span>{text}</Span>
            <A href="/register">Create Account</A>
        </Div>
    )
}