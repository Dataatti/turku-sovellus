import axios, { AxiosResponse } from 'axios';

interface StrapiClientTypes {
  titles: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Title[]>>>;
    get: (type: string, locale: string) => Promise<AxiosResponse<StrapiResponse<string>>>;
  };
  nostot: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<Nosto[]>> | undefined>;
    get: (
      id: string,
      locale: string,
      preview?: boolean
    ) => Promise<AxiosResponse<StrapiResponse<Nosto>> | undefined>;
  };
  ulkoisetLinkit: {
    list: (locale: string) => Promise<AxiosResponse<StrapiResponse<UlkoinenLinkki[]>>>;
  };
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + '/api',
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
  },
});

const strapiClient: StrapiClientTypes = {
  titles: {
    list: (locale) => client.get('/headers', { params: { locale } }),
    get: (type, locale) => client.get(`/headers`, { params: { locale, 'filters[type]': type } }),
  },
  nostot: {
    list: (locale) =>
      client.get('/nostot?populate=header_image', { params: { locale } }).catch((error) => {
        return undefined;
      }),
    get: (id, locale, preview = false) =>
      client
        .get(`/nostot/${id}?populate=header_image&publicationState=${preview ? 'draft' : 'live'}`, {
          params: { locale },
        })
        .then((data) => {
          if (!data?.data?.data?.attributes?.publishedAt && !preview) return undefined;
          return data;
        })
        .catch((error) => {
          return undefined;
        }),
  },
  ulkoisetLinkit: {
    list: (locale) => client.get('/ulkoiset-linkit', { params: { locale } }),
  },
};

export default strapiClient;
