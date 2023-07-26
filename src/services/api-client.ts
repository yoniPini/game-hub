import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key: '6ecac0be4c964bd7b9e4cfe5d503c284'
    }
})