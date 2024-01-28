import { supabase } from "@/app/_lib/supabase/client/supabaseInstance";
import type { Menu } from "@/app/global";
import type { PostgrestError } from "@supabase/supabase-js";

interface SupabaseResponse {
  data: Menu | null;
  error: PostgrestError | null;
}

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  const { data, error }: SupabaseResponse = await supabase
    .from("menu")
    .select("*")
    .eq("id", id)
    .single();

  if (error && error.code === "PGRST116") {
    return new Response(JSON.stringify(error), {
      status: 404,
      statusText: "Item not found!",
    });
  }

  if (error) {
    return new Response(
      JSON.stringify({
        status: 400,
        statusText: "An error occurred!",
      })
    );
  }

  return new Response(JSON.stringify(data), { status: 200 });
};
