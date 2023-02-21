import axios from 'axios';

const baseUrl = 'https://cottony-crystalline-poet.glitch.me/';

export const client = axios.create({
  baseURL: baseUrl,
});
