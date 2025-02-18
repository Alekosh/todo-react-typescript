import React from 'react'
import TodoItem from './TodoItem'
import { ITodo } from './Interface';

interface TodoListProps {
  todos: ITodo[];
  toggleCheckbox: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleCheckbox, removeTodo }) => {
  return (
    <ul>
      {
        todos.map(todo => <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleCheckbox={toggleCheckbox}
          {...todo} />)
      }
    </ul>
  )
}

export default TodoList