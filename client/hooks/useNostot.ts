import strapiClient from 'functions/strapi-client';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const useNostot = () => {
  const { locale } = useRouter();
  return useQuery(['getNostot', locale], () => strapiClient.nostot.list(locale || 'fi'));
};

export const useNosto = (id: string) => {
  const { locale } = useRouter();
  return useQuery(['getNostot', id], () => strapiClient.nostot.get(id, locale || 'fi'));
};
