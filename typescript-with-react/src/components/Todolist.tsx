import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";
import { MdDone } from "react-icons/md";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todolist;
