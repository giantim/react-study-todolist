import React from 'react';
import TodoItem from "./TodoItem";

function TodoList({todoItems, changeCompleted, deleteItem, editMode, editItem}) {
    return (
        <div className="main">
            <input className="toggle-all" type="checkbox"/>
            <ul id="todo-list" className="todo-list">
                {todoItems.map(item =>
                    <TodoItem
                        key={item.id}
                        isCompleted={item.isCompleted}
                        isEditing={item.isEditing}
                        changeCompleted={() => changeCompleted(item.id)}
                        deleteItem={() => deleteItem(item.id)}
                        changeEditMode={() => editMode(item.id)}
                        editItem={{
                            id: item.id,
                            handler: editItem
                        }}
                        value={item.value}
                        checked={item.isCompleted}
                    />)}
            </ul>
        </div>
    );
}

export default TodoList;