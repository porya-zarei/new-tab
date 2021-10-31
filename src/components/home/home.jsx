import SimpleNewsList from "../news/simple-news/simple-news-list";
import LastTasks from "../tasks/last-tasks/last-tasks";
import MyCalendar from "./calendar/my-calendar";
import DateWeatherCard from "./date-weather/date-weather-card";
import FavoritePages from "./favorite-pages/favorite-pages";
import SearchInput from "./search-input/search-input";

const HomePage = () => {
    return (
        <div className="h-100 w-100">
            <div className="container">
                <div className="w-100 h-100 row p-0 m-0">
                    <div className="col-12 p-0 m-0 mb-3">
                        <div className="row justify-content-between align-items-start w-100 h-auto p-0 m-0">
                            <div className="col-5 p-0 m-0 h-100">
                                <div className="row h-100 p-0 m-0 justify-content-center align-items-between align-content-between">
                                    <div className="col-12 p-0 m-0 mb-4">
                                        <DateWeatherCard />
                                    </div>
                                    <div className="col-12 p-0 m-0 h-100">
                                        <LastTasks />
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 p-0 m-0">
                                <div className="h-100 w-100 p-2">
                                    <SimpleNewsList/>
                                </div>
                            </div>
                            <div className="col-4 p-0 m-0">
                                <MyCalendar />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-0 m-0 mb-3">
                        <SearchInput />
                    </div>
                    <div className="col-12 p-0 m-0 mb-3">
                        <FavoritePages />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
