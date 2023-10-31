import React from "react";
import { Div, Button } from './style'

export function ButtonNewTask({ onClick }: { onClick: any }) {
    return (
        <Div>
            <Button onClick={onClick}>New Task</Button>
        </Div>
    )
}