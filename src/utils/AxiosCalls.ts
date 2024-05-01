import axios from "axios";

const Instance = axios.create({
    baseURL: "http://localhost:2000/api/v1"
})

export default Instance