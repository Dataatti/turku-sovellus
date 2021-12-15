import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
  },
});

const strapiClient = () => {
  return {
    highlights: {
      get: (locale: string) => {
        return axios.get('/highlights', { params: { locale } });
      },
    },
  };
};

export default strapiClient;
