import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todo.service";

const Todo = () => {
  const dispatch = useDispatch();
  return (
    <div className="p-6 flex flex-wrap gap-6">
      <Button onClick={() => dispatch(addTask("Trier les ballons"))}>
        Trier les ballons
      </Button>
      <Button onClick={() => dispatch(addTask("Disputer un match"))}>
        Disputer un match
      </Button>
      <Button onClick={() => dispatch(addTask("À la volet"))}>
        À la volet
      </Button>
      <Button onClick={() => dispatch(addTask("Selectionner un buteur"))}>
        Selectionner un buteur
      </Button>
      <Button onClick={() => dispatch(addTask("Fetcher tout au quartier"))}>
        Fetcher tout au quartier
      </Button>
      <Button onClick={() => dispatch(addTask("Fuir"))}>Fuir</Button>
    </div>
  );
};

export default Todo;
