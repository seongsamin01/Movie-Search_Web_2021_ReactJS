import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "ad8d0d181699c381f0e4ca436cb7149f",
        language: "en-US"
    }
});


export default api;