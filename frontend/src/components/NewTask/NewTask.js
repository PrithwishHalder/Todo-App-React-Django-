import React from "react";

const NewTask = ({ onHandleChange, onHandleSubmit, task }) => {
    return (
        <form className="newTaskForm" onSubmit={onHandleSubmit}>
            <input
                type="text"
                name="task"
                id="task"
                value={task}
                className="newTask"
                onChange={onHandleChange}
            />
            <button className="addTask">Add Task</button>
        </form>
    );
};

export default NewTask;
