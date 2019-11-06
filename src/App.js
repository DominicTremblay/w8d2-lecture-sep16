import React, {useState, useReducer} from 'react';
import './App.scss';
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import axios from 'axios';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const todoReducer = (state, action) => {

  const actions = {
    ADD_TODO: {
      ...state,
      todos: [...state.todos, action.todo]
    },
    DELETE_TODO: {
      ...state,
      todos: [...state.todos.filter(todo => todo.id !== action.id)]
    }
  }

  if (!actions[action.type]) {
    throw new Error("Unkown type in todo reducer");
  }

  return actions[action.type];
}

const App = () => {

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [{
      id: 1,
      task: 'Walk the Dog',
      completed: false
    }]
  });
    

  const addTodo = task => {

    // create a new todo object
    const newTodo = {
      id: 2,
      task,
      completed: false
    }

    return axios({
      url: '/api/todos',
      method: 'POST',
      data: newTodo
    })
      .then(resp => {

        console.log(resp.data);

        dispatch({ type: ADD_TODO, todo: newTodo });
    })
  

  }

  const removeTodo = id => {

    return axios({
      url: `/api/todos/${id}`,
      method: 'DELETE',
    })
      .then(resp => {
      
        console.log(resp.data);

        dispatch({ type: DELETE_TODO, id });

    })

  }

  return (
    <div className="App container">
      <h1>Simple todo</h1>
      <TodoList todos={state.todos} removeTodo={removeTodo} />
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
