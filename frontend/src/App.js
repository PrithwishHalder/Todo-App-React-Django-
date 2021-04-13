import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);

    // const onHandleChange = (e) => {
    //     setTasks(e.target.value);
    // };

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/tasks/");
        const data = await response.json();

        setTasks({ data });
    };

    return (
        <>
            {tasks.data?.map((task) => (
                <div key={task.id}>
                    <div>{task.task}</div>
                    <div>{task.status}</div>
                </div>
            ))}
            <button onClick={() => {}}>hand</button>
        </>
    );
};

export default App;
