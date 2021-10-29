import {useRef, useState} from "react";
import AddTask from "./add-task/add-task";
import TaskList from "./tasks-list/task-list";
import classes from "./tasks.module.scss";
const Tasks = () => {
    const [showAddTask, setShowAddTask] = useState(false);

    return (
        <div className="h-100 w-100">
            <div className="container">
                <div className="w-100 h-100 row p-0 m-0">
                    <div className="col-12 p-0 m-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 mb-3">
                                <button
                                    onClick={() => setShowAddTask((p) => !p)}
                                    className="btn btn-secondary">
                                    Add Task
                                    <i className="bi-list-task m-1"></i>
                                </button>
                            </div>
                            <div className="col-12 p-0 m-0">
                                <AddTask
                                    show={showAddTask}
                                    setShow={setShowAddTask}
                                />
                            </div>

                            <div className="col-12 p-0 m-0">
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
