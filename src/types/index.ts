export interface Course {
  id: string;
  title: string;
  type: 'Recorded' | 'Live';
  price: number;
  originalPrice: number;
  discount: string | null;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  imageUrl: string;
  level: string;
  duration: string;
  batchTime?: string;
}

export interface FreeCourse extends Course {
  price: 0;
  originalPrice: 0;
  discount: null;
}

export interface Testimonial {
  id: number;
  name: string;
  context: string;
  quote: string;
  note: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface BrowseItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  external?: boolean;
  description: string;
}