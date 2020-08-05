import yelp from '../api/yelp';
import {useEffect, useState} from 'react';

export default (
    initialSearch = 'beef',
    location = 'san jose',
    limit = 50
) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log(`search for: ${searchTerm}`);
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: location,
          limit: limit,
        },
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong :(');
    }
  };

  useEffect(() => { searchApi(initialSearch); }, []);

  return [searchApi, results, errorMessage];
};
