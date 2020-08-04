import axios from 'axios';

//Yelp Api Docs: https://www.yelp.com/developers/documentation/v3/get_started
const API_KEY = 'g28ntXbEfpypw9s-vHz9_E3ywiHuphODFxSlWzRx6UHfdxGF0OD_M7bJkihif_A6Busmljz84Zm0SOruf62oyAgVvXuWl76rVIBI5aJgnTPHbq42fbtuj5I9KH0oX3Yx';
const CLIENT_ID = 'CjsEGN6PghCQyoYviDDsHw';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
