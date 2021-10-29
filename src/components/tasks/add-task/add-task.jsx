import {useContext, useRef, useState} from "react";
import {getRandom, MainContext} from "../../../contexts/main/main-context";
import classes from "./addtask.module.scss";

const AddTask = ({show, setShow}) => {
    const {addTask} = useContext(MainContext);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskText, setTaskText] = useState("");
    const [taskDone, setTaskDone] = useState(false);
    const [taskColor, setTaskColor] = useState("#ffffff");
    const inputColorRef = useRef();
    const inputCheckboxRef = useRef();

    const [error, setError] = useState("");

    const handleAddTask = () => {
        if (taskTitle.length === 0 || taskText.length === 0) {
            setError("fill fields");
        } else {
            setError("");
            const task = {
                id: getRandom(),
                title: taskTitle,
                text: taskText,
                done: taskDone,
                color: taskColor,
            };
            addTask(task);
            setShow(false);
            handleClearTask();
        }
    };

    const handleClearTask = () => {
        setError("");
        setTaskTitle("");
        setTaskText("");
        setTaskDone(false);
        setTaskColor("#ffffff");
    };

    return (
        show && (
            <div className={classes.addTaskContainer}>
                <div className="card rounded p-3 bg-white rounded-3">
                    <div className="card-header bg-tarnsparent d-inline-flex justify-content-between">
                        <h5 className="w-auto">Add task</h5>
                        <button
                            onClick={() => setShow((p) => !p)}
                            className="btn btn-danger w-auto ml-auto">
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                    <div className={classes.addTask}>
                        <div className={classes.controller}>
                            <label className={classes.controllerLabel}>
                                title
                            </label>
                            <div className={classes.controllerInputContainer}>
                                <input
                                    className={classes.controllerInput}
                                    onChange={(e) =>
                                        setTaskTitle(e.target.value)
                                    }
                                    value={taskTitle}
                                    type={"text"}
                                />
                            </div>
                        </div>
                        <div className={classes.controller}>
                            <label className={classes.controllerLabel}>
                                text
                            </label>
                            <div className={classes.controllerInputContainer}>
                                <input
                                    className={classes.controllerInput}
                                    onChange={(e) =>
                                        setTaskText(e.target.value)
                                    }
                                    value={taskText}
                                    type={"text"}
                                />
                            </div>
                        </div>
                        <div className={classes.controller}>
                            <label className={classes.controllerLabel}>
                                Done?
                            </label>
                            <div className={classes.controllerInputContainer}>
                                <input
                                    ref={inputCheckboxRef}
                                    className={classes.controllerInput}
                                    onChange={(e) =>
                                        setTaskDone(e.target.checked)
                                    }
                                    checked={taskDone}
                                    type={"checkbox"}
                                    hidden={true}
                                />
                                <button
                                    onClick={() => setTaskDone((p) => !p)}
                                    className={
                                        "btn w-100 h-100 center rounded-pill " +
                                        (taskDone
                                            ? "btn-success"
                                            : "btn-danger")
                                    }>
                                    {taskDone ? (
                                        <i className="bi-calendar-check fs-4"></i>
                                    ) : (
                                        <i className="bi-calendar-minus fs-4"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className={classes.controller}>
                            <label className={classes.controllerLabel}>
                                color
                            </label>
                            <div className={classes.controllerInputContainer}>
                                <input
                                    ref={inputColorRef}
                                    className={classes.controllerInput}
                                    onChange={(e) =>
                                        setTaskColor(e.target.value)
                                    }
                                    value={taskColor}
                                    type={"color"}
                                    hidden={true}
                                />
                                <button
                                    style={{
                                        backgroundColor: taskColor,
                                    }}
                                    onClick={() =>
                                        inputColorRef.current.click()
                                    }
                                    className="w-100 h-100 rounded-pill btn">
                                    <i className="bi-palette text-white center"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex flex-wrap justify-content-between">
                        <div className="w-100 text-danger h-auto text-center">
                            {error}
                        </div>
                        <div className="w-100 d-inline-flex justify-content-between">
                            <button
                                onClick={handleClearTask}
                                className="btn btn-outline-warning">
                                Clear
                            </button>
                            <button
                                onClick={handleAddTask}
                                className="btn btn-outline-success">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default AddTask;
