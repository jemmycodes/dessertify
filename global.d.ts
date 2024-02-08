import { Tables } from "./app/_lib/types/supabase";

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.gif";
declare module "*.svg";

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

interface Result {
  id: string;
  category: string;
  name: string;
}

type Menu = Tables<"menu">;

type User = Tables<"users">;

type Cart = Tables<"cart">;

type Params = {
  params: Record<string, string>;
};
