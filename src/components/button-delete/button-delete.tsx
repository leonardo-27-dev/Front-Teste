import React from "react";
import { Button, Div, Span } from "./style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonDelete = ({ onClick }: { onClick: any }) => {
  return (
    <Div>
      <Button onClick={onClick}>
        <FontAwesomeIcon icon={faTrash} />
        <Span>Deletar</Span>
      </Button>
    </Div>
  );
};
