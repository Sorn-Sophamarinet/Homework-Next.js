export type ProductType = {
  id: number; 
  title: string;
  description: string; 
  thumbnail: string; 
  detailedDescription?: string; 
  price: number; 
  originalPrice?: number; 
  sku?: string; 
  rating: number; 
  reviewCount?: number; 
  colors?: string[]; 
  features?: string[]; 
  specifications?: {
    [key: string]: string | number;
  };
  images: string[];
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus:string;
};
