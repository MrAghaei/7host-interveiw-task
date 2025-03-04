interface CointRequestDto {
  vc_currency: string;
  ids?: string;
  category?: string;
  order?: string;
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: string;
  locale?: string;
  precision?: string;
}
