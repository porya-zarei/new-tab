import {useState} from "react";
import Container from "../switch-router/container";
import AddTask from "./add-task/add-task";
import TaskList from "./tasks-list/task-list";

const Tasks = () => {
    const [showAddTask, setShowAddTask] = useState(false);

    return (
        <Container>
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
                        <AddTask show={showAddTask} setShow={setShowAddTask} />
                    </div>

                    <div className="col-12 p-0 m-0">
                        <TaskList />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Tasks;
