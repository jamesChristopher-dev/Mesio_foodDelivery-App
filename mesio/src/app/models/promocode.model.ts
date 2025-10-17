export interface PromocodeModel {
  id: number;
  name: string;
  code: string;
  discount: number;
  expiresAt: string;
  isActive: boolean;
  logo: string;
}
