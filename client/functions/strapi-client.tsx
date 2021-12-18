import axios, { AxiosResponse } from 'axios';

interface StrapiClientTypes {
  titles: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Title[]>>>;
    get: (type: string, locale: string) => Promise<AxiosResponse<StrapiResponse<Title>>>;
  };
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  method: 'GET',
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
  },
});

const strapiClient: StrapiClientTypes = {
  titles: {
    list: (locale) => client.get('/headers', { params: { locale } }),
    get: (type, locale) => client.get(`/headers`, { params: { locale, 'filters[type]': type } }),
  },
};

export default strapiClient;
