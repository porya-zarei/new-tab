import {fetcher} from "../axios/http";

export const getAllNews = async (category = "science") => {
    const {data} = await fetcher({
        url: `https://inshortsapi.vercel.app/news?category=${category}`,
    });
    console.log("news data => ",data);
    return data;
};
