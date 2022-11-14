import React from 'react'

/// props.todos
export default function ListToDo(props) {

  return (
    <div>

      {props.todoList.map( item => {
         return (
          <div onClick={() => props.onItemClick(item)}>
            <span>{item.title}</span>
          </div>
         )
      })}
    </div>
  )
}