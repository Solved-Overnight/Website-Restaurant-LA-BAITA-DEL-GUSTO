export type Category = 'Antipasti' | 'Pasta' | 'Main Courses' | 'Seafood' | 'Desserts' | 'Wines';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  size: 'small' | 'medium' | 'large';
  category: 'Interior' | 'Culinary' | 'Atmosphere';
}