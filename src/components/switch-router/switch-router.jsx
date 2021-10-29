import { memo } from "react";
import {Switch, Route} from "react-router-dom";
import HomePage from "../home/home";
import Setting from "../setting/setting";
import Tasks from "../tasks/tasks";
const SwitchRouter = () => {
    return (
        <Switch>
            <Route path={"/setting"} component={Setting} />
            <Route path={"/tasks"} component={Tasks} />
            <Route exact path={"/"} component={HomePage} />
            <Route component={HomePage} />
        </Switch>
    );
};

export default memo(SwitchRouter);
