import React from "react";
import { Todo } from "../model";
interface Props {
  todo: Todo;
}
const SingleTodo: React.FC<Props> = ({ todo }: Props) => {
  console.log(todo);
  return <div>todo</div>;
};

export default SingleTodo;
