import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todo.service";

const Todo = () => {
  const dispatch = useDispatch();''
  return (
    <div className="p-6 flex flex-wrap gap-6">
      <Button onClick={() => dispatch(addTask("Création d'une farde"))}>
        Créer une farde
      </Button>
      <Button onClick={() => dispatch(addTask("Ajout d'un évenement"))}>
        Ajouter un event
      </Button>
      <Button onClick={() => dispatch(addTask("Création d'une note"))}>
        Nouvelle note
      </Button>
      <Button onClick={() => dispatch(addTask("Ajout d'un personnel"))}>
        Ajouter un personnel
      </Button>
      <Button onClick={() => dispatch(addTask("Suppression d'entreprise"))}>
        Supprimer entreprise
      </Button>
      <Button onClick={() => dispatch(addTask("Fuir"))}>Fuir</Button>
    </div>
  );
};

export default Todo;
