import {useContext, useEffect, useState} from "react";
import {fetcher} from "../../../axios/http";
import {weather_API_Key} from "../../../config/global";
import {MainContext} from "../../../contexts/main/main-context";
import Card from "../../card/card";

const DateWeatherCard = () => {
    const {userCity} = useContext(MainContext);
    const [date, setDate] = useState(new Date().toLocaleDateString("fa-IR"));
    const [time, setTime] = useState(new Date().toLocaleTimeString("fa-IR"));
    const [temp, setTemp] = useState("13 C , 34 F");
    const [weather, setWeather] = useState("Sunny");
    const [image, setImage] = useState("/static/images/moon.png");

    useEffect(() => {
        fetcher({
            url: `http://api.weatherapi.com/v1/current.json?key=${weather_API_Key}&q=${userCity}&aqi=no`,
        }).then(({data}) => {
            console.log("data => ", data);
            setImage("https:" + data?.current?.condition?.icon);
            setWeather(data?.current?.condition?.text);
            setTemp(
                "Temp : " +
                    data.current.temp_c +
                    " C , " +
                    data.current.temp_f +
                    " F",
            );
        });
    }, [userCity]);

    useEffect(() => {
        const intervalNumber = setInterval(() => {
            setTime(new Date().toLocaleTimeString("fa-IR"));
        }, 1000);
        return () => {
            clearInterval(intervalNumber);
        };
    }, []);

    return (
        <Card
            borderRadius={"20px"}
            title={date + " " + time}
            text={"weather : " + weather}
            badgeLabel={temp}
            imageSource={image}
        />
    );
};

export default DateWeatherCard;
