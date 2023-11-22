import axios from "axios";

export const baseAxios = axios.create({
    baseURL: 'https://71vai2lw9l.execute-api.us-east-1.amazonaws.com',
});