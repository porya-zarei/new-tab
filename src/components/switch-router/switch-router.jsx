import { memo } from "react";
import {Switch, Route} from "react-router-dom";
import HomePage from "../home/home";
import Setting from "../setting/setting";
import Tasks from "../tasks/tasks";
import Tools from "../tools/tools";
const SwitchRouter = () => {
    return (
        <Switch>
            <Route path={"/setting"} component={Setting} />
            <Route path={"/tasks"} component={Tasks} />
            <Route path={"/tools"} component={Tools} />
            <Route exact path={["/", "*/*", "*"]} component={HomePage} />
        </Switch>
    );
};

export default memo(SwitchRouter);
