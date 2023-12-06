import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'a6baf8502fc9086199b8390dff84e81e',
        language: 'ko-KR'
    }
});

export default instance;