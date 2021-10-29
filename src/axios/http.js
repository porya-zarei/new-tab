import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "aplication/json";
axios.defaults.xsrfCookieName = "XSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
axios.defaults.withCredentials = true;

export const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};

export default axios;

export const fetcher = async ({type = "GET", url, data}) => {
    switch (type) {
        case "GET":
            return await http.get(url);
        case "POST":
            return await http.post(url, data);
        case "PUT":
            return await http.put(url, data);
        case "DELETE":
            return await http.post(url, data);
        default:
            return await http.get(url);
    }
};
