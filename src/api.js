import axios from "axios";

const api = axios.create({
    baseURL: "https://multi-duck-system-api.herokuapp.com/clues",
});

export default api;