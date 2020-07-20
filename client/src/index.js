import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import './styles.css';
import TodoItem from './Todoitem'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  renderTodos = () => {
    return this.state.todos.map(todo => {
      return (
        <TodoItem key={todo.title} todo={todo} />
      )
    })
  }

  componentDidMount = () => {
    axios
      .get("https://tjr-todo-flask.herokuapp.com/todos")
      .then(response => this.setState({
        todos: response.data
      }))
      .catch(err => console.warn("Fetch Todos err: ", err))
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>Todo App</h1>
        <div />

        {this.renderTodos()}
      </div>)
  }


}





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Entry Point
);
