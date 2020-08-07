import axios from 'axios';

export const BLOGPOSTS_ENDPOINT = '/blogposts';

export default axios.create({
  //this changes everytime ngrok restarts
  baseURL: 'http://ccfd3d168355.ngrok.io',
});
