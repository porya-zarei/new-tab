import Card from "../card/card";
import DateWeatherCard from "./date-weather/date-weather-card";
import FavoritePages from "./favorite-pages/favorite-pages";
import SearchInput from "./search-input/search-input";

const HomePage = () => {
    return (
        <div className="h-100 w-100">
            <div className="container">
                <div className="w-100 h-100 row p-0 m-0">
                    <div className="col-12 p-0 m-0 mb-3">
                        <div className="row justify-content-between align-items-center w-100 h-auto p-0 m-0">
                            <div className="col-5 p-0 m-0">
                                <DateWeatherCard />
                            </div>
                            <div className="col-5 p-0 m-0">
                                <DateWeatherCard />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-0 m-0 mb-3">
                        <SearchInput />
                    </div>
                    <div className="col-12 p-0 m-0 mb-3">
                        <FavoritePages/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
