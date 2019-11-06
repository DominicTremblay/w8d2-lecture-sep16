import React from 'react'

import './TodoListItem.scss'

const TodoListItem = (({id, task, completed, removeTodo}) => {
  return (
    <li className="list-group-item new-todo"><input type="checkbox" value={task} completed={completed ? completed : undefined} /> <label>{task}</label> <button className='remove-todo' onClick={event => removeTodo(id)}>X</button></li>
  )
})

export default TodoListItem
