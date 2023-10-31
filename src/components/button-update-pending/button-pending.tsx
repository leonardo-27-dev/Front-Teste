import React from "react";
import { Button, Div, Span } from "./style";
import { faClock, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonPending = ({ onClick }: { onClick: any }) => {
  return (
    <Div>
      <Button onClick={onClick} >
        <FontAwesomeIcon icon={faClock} />
        <Span>Pendente</Span>
      </Button>
    </Div>
  );
};
