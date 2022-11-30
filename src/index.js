import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List Application</h1>
      <p>
        This application work that way :
        <ul>
          <li>
            {" "}
            To add a todo we need to select first a list in the Todo Lists by
            clicking on the list name button (like "List one" or "List two")
          </li>
          <li>
            When selecting a todo list, the text will get updated that way :
            Current List : [List Name]
          </li>
          <li>
            Once we have a selected todo list, we have to add some text inside
            of the input field, and click the Add Todo Button , this will add
            the todo below the current selected list.
          </li>
          <li>
            To add a new Todo List, fill the input field and click the Add list
            button.
          </li>
        </ul>
      </p>
      <div className="actions">
        <h2>Actions : </h2>
        <h3>Current List : List One</h3>
        <input type="text" />
        <button>Add Todo</button>
        <button>Add List</button>
      </div>
      <h3>Todo Lists</h3>
      <ul>
        <li>
          <button>List one</button>
          <ul>
            <li>Todo one</li>
            <li>Todo two</li>
          </ul>
        </li>
        <li>
          <button>List two</button>
          <ul>
            <li>Todo three </li>
            <li>Todo four</li>
          </ul>
        </li>
        <li>
          <button>List Three</button>
          <ul></ul>
        </li>
        <li>
          <button>List Four</button>
          <ul></ul>
        </li>
      </ul>
    </div>
  );
}
