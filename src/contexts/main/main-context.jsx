import {createContext, useEffect, useMemo, useState} from "react";
import {getAllNews} from "../../apis/get-news";
import {fetcher} from "../../axios/http";
import {weather_API_Key} from "../../config/global";

export const getRandom = () => Math.random().toString().slice(0, 5);

const default_favorite_pages = [
    {id: getRandom(), address: "https://www.google.com", name: "google"},
    {id: getRandom(), address: "https://www.instagram.com", name: "instagram"},
    {id: getRandom(), address: "https://www.twitter.com", name: "twitter"},
];

export const MainContext = createContext({
    backGroundImage: "",
    setBackgroundImage: () => {},
    userCity: "",
    setUserCity: () => {},
    favoritePages: [{id: "", address: "", name: ""}],
    addFavoritePage: (page = {id: "", address: "", name: ""}) => {},
    deleteFavoritePage: (id = "") => {},
    tasks: [
        {
            id: "",
            title: "",
            text: "",
            done: false,
            color: "",
            startDate: "",
            finishDate: "",
        },
    ],
    addTask: (
        task = {
            id: "",
            title: "",
            text: "",
            done: false,
            color: "",
        },
    ) => {},
    deleteTask: (id = "") => {},
    editTask: (
        id = "",
        task = {
            id: "",
            title: "",
            text: "",
            done: false,
            color: "",
        },
    ) => {},
    calendarSelectedDay: null,
    setCalendarSelectedDay: () => {},
    allNews: [
        {
            author: "",
            content: "",
            date: "",
            imageUrl: "",
            readMoreUrl: "",
            time: "",
            title: "",
            url: "",
        },
    ],
    convertApiSecretKey: "",
    changeConvertApiSecretKey: (secret = "") => {},
    weatherApiData: {
        imageUrl: "",
        temperature: "",
        weather: "",
    },
    setWeatherApiData: (
        data = {
            imageUrl: "",
            temperature: "",
            weather: "",
        },
    ) => {},
});
const MainContextProvider = ({children}) => {
    const [backGroundImage, setBackgroundImage] = useState(
        "/static/images/background.jpg",
    );
    const [userCity, setUserCity] = useState("");
    const [favoritePages, setFavoritePages] = useState([
        {id: "", address: "", name: ""},
    ]);
    const [tasks, setTasks] = useState([]);
    const [calendarSelectedDay, setCalendarSelectedDay] = useState();

    const [allNews, setAllNews] = useState([]);

    const [convertApiSecretKey, setConvertApiSecretKey] = useState();

    const [weatherApiData, setWeatherApiData] = useState({
        imageUrl: "/static/images/moon.png",
        weather: "",
        temperature: "",
    });

    const changeConvertApiSecretKey = (secret) => {
        localStorage.setItem("convertApiSecretKey", secret);
        setConvertApiSecretKey(secret);
    };

    const addTask = (
        task = {
            id: "",
            title: "",
            text: "",
            done: false,
            color: "",
        },
    ) => {
        task.startDate = new Date().toDateString();
        task.finishDate = "future";
        localStorage.setItem("user-tasks", JSON.stringify([...tasks, task]));
        setTasks((p) => [...p, {...task}]);
    };

    const deleteTask = (id = "") => {
        const newTasks = tasks.filter((t) => t.id !== id);
        localStorage.setItem("user-tasks", JSON.stringify([...newTasks]));
        setTasks([...newTasks]);
    };

    const editTask = (
        id = "",
        task = {
            id: "",
            title: "",
            text: "",
            done: false,
            color: "",
        },
    ) => {
        if (task.done) {
            task.finishDate = new Date().toDateString();
        } else {
            task.finishDate = "future";
        }
        const newTasks = tasks.filter((t) => t.id !== id);
        newTasks.push(task);
        localStorage.setItem("user-tasks", JSON.stringify(newTasks));
        setTasks([...newTasks]);
    };

    const addFavoritePage = (page) => {
        const newPages = [...favoritePages, {...page}];
        localStorage.setItem("favorite-pages", JSON.stringify(newPages));
        setFavoritePages(newPages);
    };
    const deleteFavoritePage = (id) => {
        const newPages = favoritePages.filter((p) => p.id !== id);
        localStorage.setItem("favorite-pages", JSON.stringify(newPages));
        setFavoritePages([...newPages]);
    };
    useEffect(() => {
        if (localStorage.getItem("user-city")) {
            setUserCity(localStorage.getItem("user-city"));
        } else {
            localStorage.setItem("user-city", "neyshabur");
            setUserCity("neyshabur");
        }
        console.log(localStorage.getItem("favorite-pages"));
        if (localStorage.getItem("favorite-pages")) {
            setFavoritePages(
                JSON.parse(localStorage.getItem("favorite-pages")),
            );
        } else {
            localStorage.setItem(
                "favorite-pages",
                JSON.stringify(default_favorite_pages),
            );
            setFavoritePages(default_favorite_pages);
        }
        if (localStorage.getItem("user-tasks")) {
            setTasks(JSON.parse(localStorage.getItem("user-tasks")));
        }
        if (localStorage.getItem("convertApiSecretKey")) {
            setConvertApiSecretKey(localStorage.getItem("convertApiSecretKey"));
        }
        getAllNews().then((res) => {
            setAllNews(res.data.sort((a, b) => Math.random() - 0.5)); 
        });
    }, []);
    useEffect(() => {
        fetcher({
            url: `http://api.weatherapi.com/v1/current.json?key=${weather_API_Key}&q=${userCity}&aqi=no`,
        }).then(({data}) => {
            console.log("data => ", data);
            const imageUrl = "https:" + data?.current?.condition?.icon;
            const weather = data?.current?.condition?.text;
            const temperature =
                "Temp : " +
                data.current.temp_c +
                " C , " +
                data.current.temp_f +
                " F";
            setWeatherApiData({
                imageUrl,
                weather,
                temperature,
            });
        });
    }, [userCity]);
    const context = useMemo(
        () => ({
            backGroundImage,
            setBackgroundImage,
            userCity,
            setUserCity,
            favoritePages,
            addFavoritePage,
            deleteFavoritePage,
            tasks,
            addTask,
            deleteTask,
            editTask,
            calendarSelectedDay,
            setCalendarSelectedDay,
            allNews,
            convertApiSecretKey,
            changeConvertApiSecretKey,
            weatherApiData,
            setWeatherApiData,
        }),
        [
            backGroundImage,
            userCity,
            favoritePages,
            tasks,
            calendarSelectedDay,
            allNews,
            convertApiSecretKey,
            weatherApiData,
        ],
    );
    return (
        <MainContext.Provider value={context}>{children}</MainContext.Provider>
    );
};

export default MainContextProvider;
