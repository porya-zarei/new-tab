import { useContext } from "react";
import { MainContext } from "../../../contexts/main/main-context";
import SimpleNews from "./simple-news";

const SimpleNewsList = () => {
    const {allNews} = useContext(MainContext);
    return (
        <div className="row p-0 m-0 w-100 h-auto justify-content-center align-items-center align-content-between">
            {allNews.slice(0, 2).map((news) => (
                <div key={news.date} className="col-12 p-0 m-0 mb-1">
                    <SimpleNews news={news} />
                </div>
            ))}
        </div>
    );
}
 
export default SimpleNewsList;