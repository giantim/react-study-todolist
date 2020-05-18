import React from 'react';

function TodoItem({id, isCompleted, changeCompleted, value}) {

    return (
        <>
            <li className={isCompleted ? "completed" : ""}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onClick={changeCompleted}
                        data-item-id={id}
                    />
                    <label className="label">{value}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" value={value}/>
            </li>
        </>
    );
}

export default TodoItem;