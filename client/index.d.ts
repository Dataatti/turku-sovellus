type Lang = 'fi' | 'en' | 'sv';

interface MultiLangContent {
  fi?: string;
  en?: string;
  sv?: string;
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

// Turussa tapahtuu Event
interface EventMetadata {
  '@context': string;
  '@id': string;
  '@type': string;
  data_source: string;
}

interface EventImage extends EventMetadata {
  created_time: string;
  cropping: string;
  id: number;
  last_modified_time: string;
  license: string;
  name: MultiLangContent;
  photographer_name?: string;
  publisher: string;
  url: string;
}

interface EventKeyword extends EventMetadata {
  aggregate: boolean;
  alt_labels: any[];
  created_time: string;
  deprecated: boolean;
  id: string;
  image?: any;
  last_modified_time: string;
  n_events: number;
  name: MultiLangContent;
  publisher: string;
}

interface EventLocation extends EventMetadata {
  address_country?: string;
  address_locality?: string;
  address_region?: string;
  contact_type?: string;
  created_time: string;
  custom_data?: any;
  deleted: boolean;
  description?: MultiLangContent;
  divisons: any[];
  email?: string;
  id: string;
  image: any;
  info_url: MultiLangContent;
  last_modified_time: string;
  n_events: string;
  name: MultiLangContent;
  parent?: any;
  position: {
    type: string;
    coordinates: number[];
  };
  post_office_box_num: string;
  postal_code: string;
  publisher: string;
  replaced_by?: any;
  street_address: MultiLangContent;
  telephone?: string;
}

interface Event extends EventMetadata {
  audience: { '@id': string }[];
  created_time: string;
  custom_data: any;
  date_published: string;
  id: string;
  created_time: string;
  end_time: string;
  event_status: string;
  external_links: string[];
  description: MultiLangContent;
  images: EventImage[];
  in_language: string[];
  info_url?: MultiLangContent;
  keywords: EventKeyword[];
  last_modified_time: string;
  location: EventLocation;
  location_extra_info: MultiLangContent;
  name: MultiLangContent;
  offers: {
    description?: MultiLangContent;
    info_url?: string;
    is_free: boolean;
    price?: any;
  };
  provider?: any;
  publisher: string;
  short_description: MultiLangContent;
  start_time: string;
  sub_events: { '@id': string }[];
  super_event?: any;
  super_event_type?: any;
}

interface StrapiMeta {
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

interface StrapiResponse<T> {
  data: T;
  meta?: StrapiMeta;
  error?: any;
}

interface StrapiImage {
  id: number;
  attributes: {
    alternativeText: string;
    caption: string;
    createdAt: string;
    ext: string;
    formats: { [k: string]: any };
    hash: string;
    height: number;
    mime: string;
    name: string;
    previewUrl: string;
    provider: string;
    provider_metadata: { [k: string]: any };
    size: number;
    updatedAt: string;
    url: string;
    width: number;
  };
}

interface Title {
  id: number;
  attributes: {
    createdAt: string;
    locale: string;
    publishedAt: string;
    updatedAt: string;
    text: string;
    type: string;
  };
}

interface Nosto {
  id: number;
  attributes: {
    title: string;
    description: string;
    body: string;
    publishedUntil: string;
    header_image: StrapiResponse<StrapiImage>;
  };
}

interface UlkoinenLinkki {
  id: number;
  attributes: {
    [key: string]: any;
    Title: string;
    Description: string;
    Url: string;
    LinkText: string;
    Color: 'primary' | 'secondary';
  };
}
interface News {
  content: string;
  contentSnippet: string;
  enclosure: { url: string; length: string; type: string };
  guid: string;
  isoDate: string;
  link: string;
  pubDate: string;
  title: string;
}
