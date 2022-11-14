import React, {useState} from "react";
import "./App.css"
import ListToDo from "./ListToDo";
import NewNote from "./NewNote";
import { EditNote } from "./EditNote";
import { Button,  Col} from 'react-bootstrap';


function App() {
  const [ todos, setTodos ] = useState([]);
  const [ createNew, setCreateNew ] = useState(false)
  const [ currentEditItem, setCurrentEditItem ] = useState();
  
  const handleOnSave = (newTodo) => { 
    const newList = [...todos].concat(newTodo)
    setTodos(newList);

    setCreateNew(undefined);
    setCurrentEditItem(newTodo);
  }
  
  function deleteTodo(id) {
    const updateTodos = [ ...todos].filter((todo)=> todo.id !== id)
 
    setTodos(updateTodos);
    setCurrentEditItem(undefined);
  }

  function updateTodo(todo){
    const updateTodos = [ ...todos].map((todoItem =>{
      if(todoItem.id === todo.id ){
        return todo;
      }
      return todoItem;
    }))

    setCurrentEditItem(undefined);
    setTodos(updateTodos);
  }

  const handleItemClick = (todo) => {
    setCurrentEditItem(todo);
    setCreateNew(false);
  }

  const handleCreateNew = () => {
    setCurrentEditItem(undefined);
    setCreateNew(true);
  }

  return (
    <div className="App" >
      <div className="newtodo">
        <Col> 
        <input type="search" placeholder="Search Notes..." />
        
        <Button onClick={handleCreateNew}><h4>+</h4></Button>
        </Col>
        <br/>
        <div className="listtodo">
          <span><h3>Todo list</h3></span>
          <div className="item">
          <ListToDo 
            todoList={todos} 
            onItemClick={handleItemClick}
          />
          </div>
        </div>
      </div>
{/* xs={12} sm={12} md={12}  */}
      
        <div className="edittodo">
         {
            createNew && <NewNote 
            onSave={ handleOnSave }
            />
          }
         {
            <EditNote
            todo={currentEditItem} 
            onDelete={deleteTodo}
            onSave={ updateTodo }
            />
          }
        </div>
        {/* xs={12} sm={12} md={4} */}
    </div>   
  );
}

export default App;
