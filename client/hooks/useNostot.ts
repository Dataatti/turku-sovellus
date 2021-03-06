import strapiClient from 'functions/strapi-client';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const useNostot = () => {
  const { locale } = useRouter();
  return useQuery(
    ['getNostot', locale],
    async () => await strapiClient.nostot.list(locale || 'fi'),
    { retry: 2, retryOnMount: false }
  );
};

export const useNosto = (id: string) => {
  const { locale } = useRouter();
  return useQuery(
    ['getNosto', id, locale],
    async () => await strapiClient.nostot.get(id, locale || 'fi'),
    { retry: 2, retryOnMount: false }
  );
};
