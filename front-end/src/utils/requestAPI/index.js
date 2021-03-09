import axios from 'axios';

const requestAPI = async (url, options) => {
    const response = await axios(url, options);
    return response;
}

export const getHomeStay = async () => {
    const url = 'https://sqa-api.herokuapp.com/homestay';
    const response = await requestAPI(url);
    return response
}


export const addHomeStay = async (data) => {
    const url = 'https://sqa-api.herokuapp.com/homestay';
    const response = await requestAPI(url, {
        method: 'post',
        data: data
    });
}