import axios from 'axios';

export const DOMAIN = 'https://elearningnew.cybersoft.edu.vn'

export const KEY_TOKEN_CYBERSOFT = 'TokenCybersoft';

export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOT0RFSlMgMjAiLCJIZXRIYW5TdHJpbmciOiIxOS8wOS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjM1NDU2MDAwMDAiLCJuYmYiOjE2NDY4NDUyMDAsImV4cCI6MTY2MzY5MzIwMH0.5xp7zgB_EP2j19N6MP-9dGTMWsTjV4UvdMELbD7GhyI';



//Cấu hình interceptor cho axios (Tất cả request gọi = axios đều được cấu hình) (1 dự án làm 1 duy nhất)

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'TokenCyberSoft': TOKEN_CYBERSOFT,
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
    return config;
}, (errors) => {
    return Promise.reject(errors)
})