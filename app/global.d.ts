import type { Tables } from "./_lib/types/supabase";

  type Cart = Tables<"cart">;
  type Menu = Tables<"menu">;
  type User = Tables<"profiles">;

  interface Params {
    params: Record<string, string>;
  }

  interface Result {
    id: string;
    name: string;
    category: string;
  }
