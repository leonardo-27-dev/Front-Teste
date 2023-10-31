import React from "react";
import { Button, Div, Span } from "./style";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonDone = ({ onClick }: { onClick: any }) => {
  return (
    <Div>
      <Button onClick={onClick}>
        <FontAwesomeIcon icon={faCheck} />
        <Span>Concluir</Span>
      </Button>
    </Div>
  );
};
