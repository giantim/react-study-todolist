import React, { useState } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoCount from "./components/TodoCount";

function App() {
    const [item, setItem] = useState([
        {id: 1, value: "자바스크립트 배우기", isCompleted: true, isEditing: false},
        {id: 2, value: "리액트 배우기", isCompleted: false, isEditing: false},
        {id: 3, value: "스프링 배우기", isCompleted: true, isEditing: false}
    ]);
    const [itemIndex, setItemIndex] = useState(item.length + 1);
    const [originalItems, setOriginalItems] = useState(item);


    const onAddHandler = (content) => {
        const newTodoItem = {
            id: itemIndex,
            value: content,
            isCompleted: false,
            isEditing: false
        };
        setItem(item.concat(newTodoItem));
        setOriginalItems(item);
        setItemIndex(itemIndex + 1);
    }

    const onChangeHandler = id => {
        setItem(item.map(it => it.id === id ? {...it, isCompleted: !it.isCompleted} : it));
        setOriginalItems(item);
    }

    const onDeleteHandler = id => {
        const confirmDelete = window.confirm(`${item.filter(it => it.id === id)[0].value}를 지우시겠습니까?`);
        if (confirmDelete) {
            setItem(item.filter(it => it.id !== id));
            setOriginalItems(item);
        }
    }

    const onEditHandler = id => {
        setItem(item.map(it => it.id === id ? {...it, isEditing: !it.isEditing} : it));
        setOriginalItems(item);
    }

    const onEditTodoItemHandler = (id, value) => {
        setItem(item.map(it => it.id === id ? {...it, value: value, isEditing: !it.isEditing} : it));
        setOriginalItems(item);
    }

    const onChangeCategoryHandler = value => {
        if (value === "active") {
            const activeItems = originalItems.filter(it => !it.isCompleted);
            return setItem(activeItems);
        }
        if (value === "completed") {
            const completedItems = originalItems.filter(it => it.isCompleted);
            return setItem(completedItems);
        }
        setItem(originalItems);
    }

    return (
        <div>
            <section className="todoapp">
                <TodoInput
                    onAdd={onAddHandler}
                />
                <TodoList
                    todoItems={item}
                    changeCompleted={onChangeHandler}
                    deleteItem={onDeleteHandler}
                    editMode={onEditHandler}
                    editItem={onEditTodoItemHandler}
                />
                <TodoCount
                    itemCount={item.length}
                    changeCategory={onChangeCategoryHandler}
                />
            </section>
        </div>
    );
}

export default App;
