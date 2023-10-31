import React from "react";
import { Button, Div, Span } from "./style";
import { faTrash, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonExecution = ({ onClick }: { onClick: any }) => {
  return (
    <Div>
      <Button onClick={onClick}>
        <FontAwesomeIcon icon={faWrench} />
        <Span>Em Execução</Span>
      </Button>
    </Div>
  );
};
