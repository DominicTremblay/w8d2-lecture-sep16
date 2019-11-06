import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [text, setText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const validateTodo = content => {
    if (!content) {
      setErrorMsg('Please, provide a todo');
      return false;
    }

    return true
  }
  

  const handleSubmit = event => {
    // preventDefault on the form submit
    event.preventDefault();
    if (validateTodo(text)) {
      addTodo(text);
      setText('');
    }
  }
  
  return (
    <form onSubmit={handleSubmit} >
      <h4 id='error'>{errorMsg}</h4>
      <div className="form-group">
        <input type="text" className="form-control" id="todo-input" value={text} onChange={event => setText(event.target.value)} placeholder="Enter a todo" autoFocus />
      </div>

    </form>
    )
}

export default TodoForm
