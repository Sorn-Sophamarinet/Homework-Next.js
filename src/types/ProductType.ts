export interface CartItem {
  id: number
  title: string
  price: number
  thumbnail?: string
  quantity: number
}

export type ProductTypeTwo = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
  slug?: string;
  images: string[];
};

export type UpdateProductDto = {
    id: number;
    title: string;
    price: number;
    images: string[];
  };

export type ProductType = {
  id: number; 
  title: string;
  description: string;
  category:string; 
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
export type CartItems = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
    quantity: number;
}

export type ProductDetailType = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    discountPercentage: number;
    stock: number;
    category: string;
    reviews: Reviews[];
}

export type Reviews = {
    rating: number;
    comment: string;
    date: number;
    recieverName: string;
    reviewerEmail: string;
}