import React, { useState } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoChange from "./components/TodoChange";

function App() {
    const [item, setItem] = useState([
        {id: 1, value: "자바스크립트 배우기", isCompleted: true},
        {id: 2, value: "리액트 배우기", isCompleted: false},
        {id: 3, value: "스프링 배우기", isCompleted: true}
    ]);

    let id = item.length;

    const onAddHandler = (content) => {
        const newTodoItem = {
            id: id,
            value: content,
            isCompleted: false
        };
        setItem(item.concat(newTodoItem));
    }

    const onChangeHandler = (event) => {
        const target = event.target;
    }

    return (
        <div>
            <section className="todoapp">
                <TodoInput onAdd={onAddHandler}/>
                <TodoList todoItems={item} changeCompleted={onChangeHandler}/>
                <TodoChange />
            </section>
        </div>
    );
}

export default App;
