import React from 'react'
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({todos, removeTodo}) => {
  
  const todoList = todos.map(todo => <TodoListItem key={todo.id} {...todo} removeTodo={removeTodo} />)
  
  return (
    <ul className="list-group">
      {todoList}
    </ul>
  )
}

export default TodoList
