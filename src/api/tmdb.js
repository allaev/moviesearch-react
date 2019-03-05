import axios from 'axios';

const API_KEY = '4dcb58284b820f50619a1e6cda1e09c4';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/search',
  params: {
    api_key: API_KEY
  }
});
