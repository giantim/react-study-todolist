import React from 'react';

function TodoCount({itemCount, changeCategory}) {
    return (
        <div className="count-container">
            <span className="todo-count">총 <strong>{itemCount}</strong> 개</span>
            <ul className="filters">
                <li>
                    <a
                        className="all selected"
                        onClick={() => changeCategory("all")}
                    >전체보기</a>
                </li>
                <li>
                    <a
                        className="active"
                        onClick={() => changeCategory("active")}
                    >해야할 일</a>
                </li>
                <li>
                    <a
                        className="completed"
                        onClick={() => changeCategory("completed")}
                    >완료한 일</a>
                </li>
            </ul>
        </div>
    );
}

export default TodoCount;
