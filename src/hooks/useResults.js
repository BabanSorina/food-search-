import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]); //the array of businesses we got from yelp
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Paris'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('something went wrong plm');
        }
    };
    //used to show some results even before you search for smth - useeffect ike that used to run code only once
    useEffect(() => {
        searchApi('pasta');
    }, []);
    return [searchApi, results, errorMessage];
};