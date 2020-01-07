import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 48db8192674f30aaf3714667bb31cecf07047ce5b314a6802c3c31df606731b6'
  }
});