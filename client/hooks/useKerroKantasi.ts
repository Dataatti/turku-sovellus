import { useQuery } from 'react-query';

const getKerroKantasi = async () => {
  const response = await fetch('https://kerrokantasi-api.turku.fi/v1/hearing');
  const data = await response.json();
  const results: Hearing[] = data.results.filter((hearing: Hearing) => hearing.closed === false);
  return results;
};

export default function useKerroKantasi() {
  return useQuery('kerroKantasi', getKerroKantasi);
}
