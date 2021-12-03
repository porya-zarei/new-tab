import {useContext, useEffect, useState} from "react";
import {fetcher} from "../../../axios/http";
import {weather_API_Key} from "../../../config/global";
import {MainContext} from "../../../contexts/main/main-context";
import Card from "../../card/card";

const DateWeatherCard = () => {
    const {weatherApiData} = useContext(MainContext);
    const [date,] = useState(new Date().toLocaleDateString("fa-IR"));
    return (
        <Card
            borderRadius={"20px"}
            title={date}
            text={"weather : " + weatherApiData.weather}
            badgeLabel={weatherApiData.temperature}
            imageSource={weatherApiData.imageUrl}
        />
    );
};

export default DateWeatherCard;
