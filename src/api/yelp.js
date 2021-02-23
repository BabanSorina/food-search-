import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer u2_yXi5y-xVWCSDQj5FRaBvxjZzsBBinVmefo-TxZzphM8BmHFYv5SqPlaJSe8gAKhtd7ldoDeVPYB-PjlwnG-aTaCEep0Kk_8Hv4ft3Lk0Foig2J5AtufX7xE81YHYx'
    }
});