import type { PostgrestError } from "@supabase/supabase-js";
import { createSupabaseBrowserClient } from "./supabaseInstance";

const supabaseClient = createSupabaseBrowserClient();

export const fetchFilteredMenu = async (
  query: string
): Promise<{
  data: MenuTypes[] | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabaseClient
    .from("menu")
    .select("*")
    .filter("name", "ilike", `%${query}%`);

  return { data, error };
};
