import {useContext} from "react";
import {MainContext} from "../../../contexts/main/main-context";
import classes from "./task.module.scss";

const Task = ({
    task = {
        id: "",
        title: "",
        text: "",
        done: false,
        color: "",
        startDate: "",
        finishDate: "",
    },
}) => {
    const {deleteTask, editTask} = useContext(MainContext);
    const handleDeleteTask = () => {
        deleteTask(task.id);
    };
    const handleCheck = () => {
        const newTask = {...task};

        newTask.done = !task.done;
        console.log(newTask, task);
        editTask(task.id, newTask);
    };
    return (
        <div
            style={{borderColor: task.color}}
            className={classes.taskContainer}>
            <div className={classes.taskLeftPart}>
                <div className={classes.taskTitle}>{task.title}</div>
                <div className={classes.taskText}>{task.text}</div>
            </div>
            <div className={classes.taskRightPart}>
                <button
                    onClick={handleCheck}
                    className={
                        task.done ? classes.taskBtnTrue : classes.taskBtnFalse
                    }>
                    {task.done ? (
                        <i className="bi-calendar-check"></i>
                    ) : (
                        <i className="bi-calendar-minus"></i>
                    )}
                </button>
                <button
                    onClick={handleDeleteTask}
                    className={classes.taskDeleteBtn}>
                    <i className="bi-trash2-fill"></i>
                </button>
            </div>
            <div className={classes.taskBottomPart}>
                <div className={classes.taskStartDate}>
                    <strong>start: </strong>
                    {task.startDate}
                </div>
                <div className={classes.taskFinishDate}>
                    <strong>finish: </strong>
                    {task.finishDate}
                </div>
            </div>
        </div>
    );
};

export default Task;
