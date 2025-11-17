// =======================
// Base System Types
// =======================
export type BaseEntity = {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
};

// Simple media type for Strapi upload file
export type Media = {
  id: number;
  url: string;
  name: string;
  mime: string;
  size: number;
  createdAt: string;
  updatedAt: string;
};

// =======================
// Users-Permissions Plugin Types
// =======================
export type Role = BaseEntity & {
  name: string;
  description?: string;
  type?: string;
};

export type User = BaseEntity & {
  username: string;
  email: string;
  provider?: string;
  password?: string;
  resetPasswordToken?: string | null;
  confirmationToken?: string | null;
  confirmed?: boolean;
  blocked?: boolean;

  role?: Role | null;

  addresses?: Address[];
  credit_cards?: CreditCard[];
  favorites?: Favorite[];
  orders?: Order[];
};

// =======================
// Address
// =======================
export type Address = BaseEntity & {
  address: string;
  city: string;
  district: string;

  users_id?: User | null; // many-to-one
};

// =======================
// Category
// =======================
export type Category = BaseEntity & {
  name: string;
};

// =======================
// CreditCard
// =======================
export type CreditCard = BaseEntity & {
  expiry_date: string;
  card_number: string;
  cvc_no: string;
  user_name: string;

  user_id?: User | null; // many-to-one
};

// =======================
// Order
// =======================
export type Order = BaseEntity & {
  users_id?: User | null;
  payments?: Payment[];
  total_amount: number;
  state: string;
  order_date: string;
};

// =======================
// Payment
// =======================
export type Payment = BaseEntity & {
  payment_date: string;
  amount: number;
  state: string;

  order_id?: Order | null;
};

// =======================
// ProductHistory
// =======================
export type ProductHistory = BaseEntity & {
  change_date: string;
  price?: number | null;
  stock?: number | null;

  product_id?: Product | null;
};

// =======================
// Favorite
// =======================
export type Favorite = BaseEntity & {
  user_id?: User | null;
  product_id?: Product | null;
};

// =======================
// Tag
// =======================
export type Tag = BaseEntity & {
  name: string;
  products?: Product[];
};

// =======================
// Product
// =======================
export type Product = BaseEntity & {
  images: Media[];
  name: string;
  price: number;
  stock: number;
  size?: string | null;
  point?: number | null;
  category?: string | null;
  description?: string | null;

  tag_ids?: Tag[];

  product_histories?: ProductHistory[];
  favorites?: Favorite[];
};
