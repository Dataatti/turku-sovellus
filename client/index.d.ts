type Lang = 'fi' | 'en' | 'sv';

interface MultiLangContent {
  fi: string;
  en: string;
  sv: string;
}

// Kerrokantasi Hearing
interface Hearing {
  id: string;
  n_comments: number;
  open_at: string;
  close_at: string;
  published: boolean;
  closed: boolean;
  title: MultiLangContent;
  abstract: MultiLangContent;
  slug: string;
  main_image: {
    alt_text: MultiLangContent;
    caption: MultiLangContent;
    height: number;
    width: number;
    id: string;
    title: MultiLangContent;
    url: string;
  };
  labels: { id: number; label: MultiLangContent }[];
}
