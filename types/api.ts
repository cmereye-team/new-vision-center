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