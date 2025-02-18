import React from 'react'
import { ITodo } from './Interface';

interface TodoItemProps extends ITodo {
  toggleCheckbox: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleCheckbox, removeTodo }) => {
  return (
    <li>
      <input type='checkbox' checked={completed} onChange={() => toggleCheckbox(id)} />
      <span>{text}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem