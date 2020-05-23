import React, {useState} from 'react';

function TodoInput({onAdd}) {
    const [input, setInput] = useState("");

    function changeInput(event) {
        return setInput(event.target.value);
    }

    function isValid(event, value) {
        return event.key === "Enter"
            && value.trim().length !== 0;
    }

    function addTodoItem(event) {
        if (isValid(event, input)) {
            onAdd(input);
            setInput("");
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
                onKeyUp={addTodoItem}
                value={input}
            />
        </div>
    );
}

export default TodoInput;