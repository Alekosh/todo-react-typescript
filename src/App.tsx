import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { ITodo } from './components/Interface'

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (): void => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText('')
    }
  }
  const removeTodo = (todoId: string): void => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }
  const toggleCheckbox = (todoId: string): void => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      )
    )
  }

  return (
    <>
      <InputField
        text={text}
        setText={setText}
        setTodo={addTodo}
      />

      <TodoList
        todos={todos}
        toggleCheckbox={toggleCheckbox}
        removeTodo={removeTodo}
      />
    </>
  )
}

export default App
