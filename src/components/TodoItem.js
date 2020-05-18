import React from 'react';

function TodoItem({isCompleted, changeCompleted, checked, value, deleteItem}) {
    function changeInput(event) {
        return event.target.value;
    }

    return (
        <>
            <li className={isCompleted ? "completed" : ""}>
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
                    value={value}
                    onChange={changeInput}
                />
            </li>
        </>
    );
}

export default TodoItem;