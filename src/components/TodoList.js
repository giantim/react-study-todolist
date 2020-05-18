import React, {useState} from 'react';
import TodoItem from "./TodoItem";

function TodoList({todoItems, changeCompleted}) {
    const [items, setItems] = useState(todoItems);

    function isCompleted(item) {
        return item.isCompleted ? "completed" : "";
    }

    return (
        <div className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul id="todo-list" className="todo-list">
                {todoItems.map(todoItem =>
                    <TodoItem
                        key={todoItem.id}
                        id={todoItem.id}
                        isCompleted={todoItem.isCompleted}
                        changeCompleted={changeCompleted}
                        value={todoItem.value}
                    />)}
            </ul>
        </div>
    );
}

export default TodoList;