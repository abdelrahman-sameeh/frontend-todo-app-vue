import axios from "axios";

export const baseURL = axios.create({baseURL: 'http://localhost:8000'})

// export const baseURL = axios.create({baseURL: 'https://backend-api-todoapp.onrender.com'})