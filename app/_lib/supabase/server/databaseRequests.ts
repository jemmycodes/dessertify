import { cookies } from "next/headers";
import { createSupabaseServerComponent } from "./index";

export const fetchDataInServerComponents = async <T>(
  table: string,
  select: string
) => {
  const cookiesStore = cookies();
  const supabase = createSupabaseServerComponent(cookiesStore);
  const { data, error } = await supabase.from(table).select(select);

  console.log("Response:", data, error);

  if (error) {
    console.log(error);
    throw new Error("An error occurred");
  }

  console.log(data);
  return data as T[];
};
