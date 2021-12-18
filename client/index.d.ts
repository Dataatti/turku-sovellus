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
  meta: StrapiMeta;
  error?: any;
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
