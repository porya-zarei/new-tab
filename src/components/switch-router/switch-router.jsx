import {memo} from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../home/home";
import News from "../news/news";
import Setting from "../setting/setting";
import Tasks from "../tasks/tasks";
import Tools from "../tools/tools";
const SwitchRouter = () => {
    return (
        <Routes>
            <Route path={"/setting"} element={<Setting />} />
            <Route path={"/tasks"} element={<Tasks />} />
            <Route path={"/tools"} element={<Tools />} />
            <Route path={"/news"} element={<News />} />
            <Route path={"*"} element={<HomePage />} />
        </Routes>
    );
};

export default memo(SwitchRouter);
