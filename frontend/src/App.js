import React, { useState, useEffect } from "react";

import "./App.css";

import NewTask from "./components/NewTask/NewTask";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
    const detail = {
        id: "",
        task: "",
        status: false,
    };
    const [taskl, setTaskl] = useState(detail);
    const { task } = taskl;
    const [tasks, setTasks] = useState([]);

    //set data on form input change
    const onHandleChange = (e) => {
        setTaskl({ ...taskl, [e.target.name]: e.target.value });
    };

    //fetch tasks from db and show list
    const loadData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/tasks/");
        const data = await response.json();

        setTasks({ data });
    };

    //form handling for new Task and Update Task

    //url setting and form submission
    const newTask = async () => {
        var url = taskl.id
            ? `http://127.0.0.1:8000/api/taskUpdate/${taskl.id}/`
            : "http://127.0.0.1:8000/api/newTask/";
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(taskl),
        });

        setTaskl(detail);
        loadData();
    };

    //set form to task update
    const editTask = (e) => {
        setTaskl(e);
    };

    //form submit function call
    const onHandleSubmit = (e) => {
        e.preventDefault();
        // console.log(taskl.id);
        newTask();
    };

    //Delete Task

    const deleteTask = async (e) => {
        var url = `http://127.0.0.1:8000/api/taskDelete/${e.id}/`;
        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        loadData();
    };

    //Task Status Change

    const statusChange = async (e) => {
        var url = `http://127.0.0.1:8000/api/taskUpdate/${e.id}/`;
        const data = { id: e.id, task: e.task, status: e.status };
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: {
                status: JSON.stringify(data),
            },
        });
        loadData();
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="Todo">
            <div>
                <NewTask
                    onHandleChange={onHandleChange}
                    onHandleSubmit={onHandleSubmit}
                    task={task}
                />
                <TaskList
                    data={tasks.data}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    statusChange={statusChange}
                />
            </div>
        </div>
    );
};

export default App;
