import strapiClient from 'functions/strapi-client';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const useUlkoisetLinkit = () => {
  const { locale } = useRouter();
  return useQuery(['getUlkoisetLinkit', locale], () => strapiClient.ulkoisetLinkit.list(locale || 'fi'));
};