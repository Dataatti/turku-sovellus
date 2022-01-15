import axios, { AxiosResponse } from 'axios';

interface StrapiClientTypes {
  titles: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Title[]>> | undefined>;
    get: (
      type: string,
      locale: string
    ) => Promise<AxiosResponse<StrapiResponse<string>> | undefined>;
  };
  nostot: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Nosto[]>> | undefined>;
    get: (id: string, locale: string) => Promise<AxiosResponse<StrapiResponse<Nosto>> | undefined>;
  };
  ulkoisetLinkit: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<UlkoinenLinkki[]>> | undefined>;
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
    list: (locale) =>
      client.get('/headers', { params: { locale } }).catch((error) => {
        return undefined;
      }),
    get: (type, locale) =>
      client
        .get(`/headers`, { params: { locale, 'filters[type]': type } })
        .then((n) => n?.data?.data?.[0]?.attributes?.text)
        .catch((error) => {
          return undefined;
        }),
  },
  nostot: {
    list: (locale) =>
      client.get('/nostot?populate=header_image', { params: { locale } }).catch((error) => {
        return undefined;
      }),
    get: (id, locale) =>
      client.get(`/nostot/${id}?populate=header_image`, { params: { locale } }).catch((error) => {
        return undefined;
      }),
  },
  ulkoisetLinkit: {
    list: (locale) =>
      client.get('/ulkoinen-linkkis', { params: { locale } }).catch((error) => {
        return undefined;
      }),
  },
};

export default strapiClient;
