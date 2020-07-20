import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import './styles.css';
import TodoItem from './Todoitem'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      todo: ""
    }
  }

  addTodo = e => {
    e.preventDefault();
    axios.post("https://tjr-todo-flask.herokuapp.com/todo", {
      title: this.state.todo,
      done: false
    })
      .then(res => {
        this.setState({
          todos: [...this.state.todos, res.data],
          todo: ""
        })
      })
      .catch(err => console.warn("addTodo error: ", err))
  }

  handleChange = e => {
    this.setState({
      todo: e.target.value
    })
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
        <form className="add-todo" onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder=" Add todo "
            onChange={this.handleChange}
            value={this.state.todo}
          />

          <button type="submit">Add</button>
        </form>

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
