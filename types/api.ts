/*
 * @Author: 谭洁莹
 * @Date: 2026-07-28 13:48:25
 * @LastEditTime: 2026-08-06 16:18:42
 * @FilePath: /types/api.ts
 * @Description: 
 */
export type BackendBoolean = "1" | "0" | 1 | 0;
export type BackendDateTime = string;
export interface ApiResponse<T> {
  code: number
  data: T
  msg?: string
}
export interface SlideItem {
  id: number;
  pic: string;
  pic_mobile: string;
  link: string;
  title: string;
  subtitle?: string;
}
export interface Article {
  id: number;
  acode: number | string;
  scode: number | string;
  pcode: number | string;
  title: string;
  subtitle?: string;
  filename: string;
  author?: string;
  source?: string;
  date: BackendDateTime;
  update_time?: BackendDateTime;
  ico?: string;
  content?: string;
  tags?: string;
  keywords?: string;
  description?: string;
  istop: BackendBoolean;
  isrecommend: BackendBoolean;
  sortname?: string;
  ext_content_whatsapp?: string;
  ext_surgicalrisk?: string;
  ext_lititile?: string;
  url?: string;
}
export interface ArticleListResponse {
  code: number;
  msg: string;
  data: Article[];
  meta: {
    page: number;
    pagesize: number;
    total: number;
  };
}