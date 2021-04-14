import React from "react";

const TaskList = ({ data, editTask, deleteTask, statusChange }) => {
    return (
        <div>
            {data?.map((task, index) => (
                <div className="task" key={index}>
                    <div id={task.id} onClick={() => statusChange(task)}>
                        {task.status ? <strike>{task.task}</strike> : <span>{task.task}</span>}
                    </div>
                    <div className="task-option">
                        <div onClick={() => editTask(task)}>Edit</div>
                        <div onClick={() => deleteTask(task)}>-</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
