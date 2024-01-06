import axios from 'axios';

const favoriteAPI = axios.create({ baseURL: 'http://localhost:3000/favorites' });

async function getFavorites() {
    const response = await favoriteAPI.get('/');

    return response.data;
}

async function postFavorite(id) {
    const response = await favoriteAPI.post(`/${id}`);

    return response.data;
}

async function deleteFavorite(id) {
    const response = await favoriteAPI.delete(`/${id}`);

    return response.data;
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite,
}