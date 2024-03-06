interface APIResponseBase {
  status: "error";
  error?: string;
}

interface APIResponseData<T> {
  status: "success";
  data: T;
}

export type APIResponse<T = any> = T extends undefined
  ? APIResponseBase
  : APIResponseData<T>;
