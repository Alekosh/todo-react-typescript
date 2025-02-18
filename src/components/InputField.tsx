import React from 'react'

interface TodoFieldProps {
  text: string;
  setText: (text: string) => void;
  setTodo: () => void;
}

const InputField: React.FC<TodoFieldProps> = ({ text, setText, setTodo }) => {
  return (
    <div className='input-field'>
      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder='Введите что нибудь'
      />
      <button onClick={setTodo}>Add todo</button>
    </div>
  )
}

export default InputField