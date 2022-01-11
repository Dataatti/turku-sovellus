import strapiClient from 'functions/strapi-client';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const useTitles = () => {
  const { locale } = useRouter();
  return useQuery(['getTitles', locale], () => strapiClient.titles.list(locale || 'fi'));
};

export const useTitle = (type: string) => {
  const { locale } = useRouter();
  return useQuery(['getTitle', type], () => strapiClient.titles.get(type, locale || 'fi'));
};
