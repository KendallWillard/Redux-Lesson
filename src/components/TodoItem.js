import React from 'react'

const TodoItem = props => {
    return(
        <article>
        <h3 style={{textDecoration: props.completed ? "line-through" : "none" }}>{props.text}</h3>
        </article>
   
    )
}

export default TodoItem