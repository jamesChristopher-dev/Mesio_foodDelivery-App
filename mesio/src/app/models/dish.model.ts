export interface DishModel {
  id: number;
  rating: number;
  name: string;
  description: string;
  price: number;
  category: any;
  type: 'food' | 'drink';
  cookingTime: number;
  weight: string;
  isAvailable: boolean;
  image: string;
  quantity?: number;
  ingredients?: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
}
