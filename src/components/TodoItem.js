import React, {useState} from 'react';

function TodoItem({isCompleted, isEditing, changeCompleted, checked, value, deleteItem, changeEditMode, editItem}) {
    const [input, setInput] = useState(value);

    function changeInput(event) {
        setInput(event.target.value);
    }

    function isValid(event, value) {
        return event.key === "Enter"
            && value.trim().length !== 0;
    }

    function editTodoItem(event) {
        const $target = event.target;
        if (event.key === "Escape") {
            setInput(value);
            editItem.handler(editItem.id, value);
        }
        if (isValid(event, $target.value)) {
            editItem.handler(editItem.id, $target.value);
        }
    }

    return (
        <>
            <li
                className={isCompleted ? "completed" : isEditing ? "editing" : ""}
                onDoubleClick={changeEditMode}
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onChange={changeInput}
                        onClick={changeCompleted}
                        defaultChecked={checked}
                    />
                    <label className="label">{value}</label>
                    <button
                        className="destroy"
                        onClick={deleteItem}
                    ></button>
                </div>
                <input
                    className="edit"
                    value={input}
                    onChange={changeInput}
                    onKeyUp={editTodoItem}
                />
            </li>
        </>
    );
}

export default TodoItem;