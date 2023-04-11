export interface BaseSearchParams {
  query: string;
  page?: number;
}

export type SearchAction = (params: BaseSearchParams) => void;
