import axios from 'axios';

const bookAPI = axios.create({ baseURL: 'http://localhost:3000/books' });

async function getBooks() {
    const response = await bookAPI.get('/');

    return response.data;
}

export {
    getBooks
}