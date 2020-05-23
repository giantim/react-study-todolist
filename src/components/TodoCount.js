import React, {useState} from 'react';

function TodoCount({itemCount, changeCategory}) {
    const [className, setClassName] = useState(["all selected", "active", "completed"]);

    return (
        <div className="count-container">
            <span className="todo-count">총 <strong>{itemCount}</strong> 개</span>
            <ul className="filters">
                <li>
                    <a
                        className={className[0]}
                        onClick={() => {
                            changeCategory("all");
                            setClassName(["all selected", "active", "completed"]);
                        }}
                    >전체보기</a>
                </li>
                <li>
                    <a
                        className={className[1]}
                        onClick={() => {
                            changeCategory("active");
                            setClassName(["all", "active selected", "completed"]);
                        }}
                    >해야할 일</a>
                </li>
                <li>
                    <a
                        className={className[2]}
                        onClick={() => {
                            changeCategory("completed");
                            setClassName(["all", "active", "completed selected"]);
                        }}
                    >완료한 일</a>
                </li>
            </ul>
        </div>
    );
}

export default TodoCount;
