import React, { useState } from "react";
import { Todo } from "../model";

//!importing styles
import "./styles.css";

//!importing icons
import { MdDone } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [edit_todo, setEdit_todo] = useState<string>(todo.todo);

  //!Add Function
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //!Delete Function
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <form className="todos_single">
      {edit ? (
        <input type="text" />
      ) : todo.isDone ? (
        <s className="todo_single_text">{todo.todo}</s>
      ) : (
        <span className="todo_single_text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
