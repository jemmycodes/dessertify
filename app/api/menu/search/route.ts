import { createSupabaseBrowserClient } from "@/app/_lib/supabase/client";

const supabase = createSupabaseBrowserClient();
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");

  const { data, error } = await supabase
    .from("menu")
    .select("name, category, id")
    .filter("name", "ilike", `%${query}%`);

  if (error) {
    return Response.json(error, {
      status: 400,
      statusText: "An error occurred, try again!",
    });
  }

  return Response.json(data, { status: 200 });
}
