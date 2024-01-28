import { supabase } from "@/app/_lib/supabase/client/supabaseInstance";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");

  const { data, error } = await supabase
    .from("menu")
    .select("name, category")
    .filter("name", "ilike", `%${query}%`);

  if (error) {
    return Response.json(error, {
      status: 400,
      statusText: "An error occurred!",
    });
  }

  return Response.json(data, { status: 200 });
}
