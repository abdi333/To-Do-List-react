import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";


export default function App() {
    
    const [todoList, setTodoList] = useState([
      'Wash the dishes',
      'Go to school',
    ]);
    const listEl = useRef();
  
    return (
      <div className="App">
        <h1>To Do List</h1>
        <input type="text" ref={listEl}/> <br />
        <button onClick={function (){
          setTodoList([...todoList, listEl.current.value])
          listEl.current.value = "";
        }}>Add todo</button>

        <ul>
          {
            todoList.map(function (value, index) {
              return <li>{"New Item: " + value }</li>
            })
          }
        </ul>
      </div>
    )
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/**
 *
 * Whenever we click on the add toDo button we want to add the value typed
 * inside of the input to the todoList state array
 *
 * Then we want to display inside the <ul> as an <li> each item inside of the todoList array
 * using the .map method
 */