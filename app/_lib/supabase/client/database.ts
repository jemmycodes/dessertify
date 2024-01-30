import { createSupabaseBrowserClient } from "./index";

const supabase = createSupabaseBrowserClient();

export const addItem = async <T>(table: string, item: T) => {
  const { error } = await supabase.from(table).insert(item);

  if (error) return error;
};
