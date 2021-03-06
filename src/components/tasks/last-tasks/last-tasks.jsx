import {useContext} from "react";
import {MainContext} from "../../../contexts/main/main-context";

const LastTasks = () => {
    const {tasks} = useContext(MainContext);
    return (
        <div className="row p-2 m-0 rounded-3 bg-light">
            <div className="col-12 p-0 m-0">
                <strong>The latest tasks :</strong>
            </div>
            {tasks.slice(0, 2).map((task) => (
                <div
                    key={task.id}
                    className="col-12 p-0 m-0 -new-tab-center mb-1">
                    <div className="h-100 w-100 -new-tab-center p-2">
                        {task.title}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LastTasks;
