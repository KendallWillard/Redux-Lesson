import React from "react";
import AddTodoForm from "../containers/AddTodoForm";
import TodosContainer from '../containers/TodosContainer'
import "./App.css";


function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <AddTodoForm />
      <TodosContainer />
    </div>
  );
}

export default App;
