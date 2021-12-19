import { useQuery } from 'react-query';

const getTurkuEvents = async () => {
  const response = await fetch(
    `https://api.turku.fi/linkedevents/v1/event/?include=keywords,location&keyword=festivalsandmajorevents&start=today`
  );
  const data = await response.json();
  const results: Event[] = data.data;
  results.sort((a, b) => {
    const dateA = new Date(a.start_time);
    const dateB = new Date(b.start_time);
    if (dateA === dateB) {
      return 0
    } else if (dateA > dateB) {
      return 1
    } else {
      return -1
    };
  })
  return results;
};

export default function useTurkuEvents() {
  return useQuery('turkuEvents', getTurkuEvents);
}
