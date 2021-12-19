import axios, { AxiosResponse } from 'axios';

interface StrapiClientTypes {
  titles: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Title[]>>>;
    get: (type: string, locale: string) => Promise<AxiosResponse<StrapiResponse<Title>>>;
  };
  nostot: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Nosto[]>>>;
    get: (id: string, locale: string) => Promise<AxiosResponse<StrapiResponse<Nosto>>>;
  };
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + '/api',
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
  nostot: {
    list: (locale) => client.get('/nostots?populate=header_image', { params: { locale } }),
    get: (id, locale) => client.get(`/nostots/${id}?populate=header_image`, { params: { locale } }),
  },
};

export default strapiClient;
