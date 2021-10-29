import {useContext} from "react";
import {MainContext} from "../../../contexts/main/main-context";
import Task from "../task/task";
import classes from './tasklist.module.scss'

const TaskList = () => {
    const {tasks} = useContext(MainContext);
    return (
        <div className="w-100 h-auto">
            <div
                className={
                    "row p-0 m-0 justify-content-evenly align-items-start align-content-start "
                + classes.tasksContainer}>
                {tasks.map((task) => (
                    <div key={task.id} className="col-3 mb-2">
                        <Task task={task} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
