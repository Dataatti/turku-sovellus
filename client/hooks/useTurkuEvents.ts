import { useQuery } from 'react-query';

const getTurkuEvents = async () => {
  const date = new Date().toISOString().substring(0, 10);
  const response = await fetch(
    `https://api.turku.fi/linkedevents/v1/event/?include=keywords,location&start=${date}&end=${date}`
  );
  const data = await response.json();
  console.log(data);
  const results: Hearing[] = data.results;
  return results;
};

export default function useTurkuEvents() {
  return useQuery('turkuEvents', getTurkuEvents);
}
