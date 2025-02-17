import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }

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
      <div className='input-field'>
        <input
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder='Введите что нибудь'
        />
        <button onClick={addTodo}>Add todo</button>
      </div>

      <ul>
        {
          todos.map(todo => <li key={todo.id}>
            <input type='checkbox' checked={todo.completed} onChange={() => toggleCheckbox(todo.id)} />
            <span>{todo.text}</span>
            <span onClick={() => removeTodo(todo.id)}>&times;</span>
          </li>)
        }
      </ul>
    </>
  )
}

export default App
