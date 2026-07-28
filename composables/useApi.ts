// composables/useApi.ts
export const $api = <T = any>(request: string, opts: Parameters<typeof $fetch>[1] = {}) => {
  // 定义基准地址
  const BASE_URL = "https://cms.cmermedical.com.hk";

  return $fetch<T>(request, {
    baseURL: BASE_URL,
    ...opts,
    headers: {
      "X-Site-Id": "vision",
      ...opts.headers,
    },
  });
};
