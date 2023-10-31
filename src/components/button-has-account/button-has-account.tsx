import React from "react";
import { Div, Span, A } from './style'

export function ButtonHasAccont() {
    return (
        <Div>
            <Span>Already logged in?</Span>
            <A href="/login">Login</A>
        </Div>
    )
}