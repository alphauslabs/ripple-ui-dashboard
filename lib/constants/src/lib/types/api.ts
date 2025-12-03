export interface ErrorDetail {
  code: number;
  message: string;
  details: ErrorDetailInfo[];
}
export interface ApiResponse<T = unknown> {
  result: T;
  error: ErrorDetail;
}
export interface ErrorDetailInfo {
  '@type': string;
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}
