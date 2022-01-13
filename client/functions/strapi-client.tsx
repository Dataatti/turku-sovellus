import axios, { AxiosResponse } from 'axios';

interface StrapiClientTypes {
  titles: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Title[]>>>;
    get: (type: string, locale: string) => Promise<AxiosResponse<StrapiResponse<string>>>;
  };
  nostot: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Nosto[]>>>;
    get: (id: string, locale: string) => Promise<AxiosResponse<StrapiResponse<Nosto>>>;
  };
  ulkoisetLinkit: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<UlkoinenLinkki[]>>>;
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
    get: (type, locale) =>
      client
        .get(`/headers`, { params: { locale, 'filters[type]': type } })
        .then((n) => n?.data?.data?.[0]?.attributes?.text),
  },
  nostot: {
    list: (locale) => client.get('/nostot?populate=header_image', { params: { locale } }),
    get: (id, locale) => client.get(`/nostot/${id}?populate=header_image`, { params: { locale } }),
  },
  ulkoisetLinkit: {
    list: (locale) => client.get('/ulkoinen-linkkis', { params: { locale } }),
  },
};

export default strapiClient;
