import React from 'react';

function TodoInput({onAdd}) {
    function changeInput(event) {
        return event.target.value;
    }

    function isValid(event, value) {
        return event.key === "Enter"
            && value.trim().length !== 0;
    }

    function addTodoItem(event) {
        const $newTodoTarget = event.target;
        if (isValid(event, $newTodoTarget.value)) {
            onAdd($newTodoTarget.value);
            $newTodoTarget.value = "";
        }
    }

    return (
        <div>
            <h1>TODOS</h1>
            <input
                id="new-todo-title"
                className="new-todo"
                placeholder="할일을 추가해주세요"
                autoFocus
                onChange={changeInput}
                onKeyDown={addTodoItem}
            />
        </div>
    );
}

export default TodoInput;