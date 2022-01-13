import { useQuery } from 'react-query';
import Parser from 'rss-parser';

const getTiedotteet = async (locale: string) => {
  let url;
  // Change source based on locale
  if (locale === 'fi') {
    url = 'https://www.turku.fi/term/7/rss.xml';
  } else {
    url = `https://www.turku.fi/${locale}/term/7/rss.xml`;
  }
  const parser = new Parser<{ [key: string]: any }, News>();
  // Use https://api.allorigins.win/ to prevent CORS error with RSS feed
  const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
  const rawData = await res.json();
  const feed = await parser.parseString(rawData?.contents);
  const items = feed?.items ? feed.items : [];
  return items;
};

export default function useTiedotteet(locale: string) {
  return useQuery([ 'tiedotteet', locale ],  () => getTiedotteet(locale));
}
