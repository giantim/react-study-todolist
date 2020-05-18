import React from 'react';
import TodoItem from "./TodoItem";

function TodoList({todoItems, changeCompleted}) {
    return (
        <div className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul id="todo-list" className="todo-list">
                {todoItems.map(item =>
                    <TodoItem
                        key={item.id}
                        isCompleted={item.isCompleted}
                        changeCompleted={() => changeCompleted(item.id)}
                        value={item.value}
                        checked={item.isCompleted}
                    />)}
            </ul>
        </div>
    );
}

export default TodoList;