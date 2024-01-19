declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

type MenuTypes = {
  _id: string;
  name: string;
  category: string;
  photoUrl: string;
  description: string;
  slug: string;
};

interface CartType {
  _id: string;
  name: string
  price: number;
  quantity: number;
  photoUrl: string;
  category: string;
}

interface IntrinsicElements {
  "l-dot-spinner": unknown;
}

type Params = {
  params: Record<string, string>;
};

type Props = {
  children: React.ReactNode;
};
