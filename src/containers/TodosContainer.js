import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoItem from '../components/TodoItem'

const TodosContainer = props => {
    const todos = props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)
    return(
        <div>
            {todos}
        </div>
    )
  
}

const mapStateToProps = state => ({
    todos: state.todos
})

// const mapDispatchToProps = dispatch => ({
//   addTodo: (id, text) => dispatch(addTodo(id, text))
// })

export default connect( mapStateToProps, null)(TodosContainer) 