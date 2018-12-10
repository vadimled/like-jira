import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://like-jira.firebaseio.com/'
});

export default instance;
