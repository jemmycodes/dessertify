import { createSupabaseServerClient } from "@/app/_lib/supabase/server/supabaseInstance";

export const GET = async () => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from("cart").select("*");

  if (error) {
    return Response.json(error, {
      status: 500,
      statusText: "An error occurred",
    });
  }

  console.log(data, error, "route handler");

  return Response.json(data, { status: 200, statusText: "OK!" });
};

export async function POST(request: Request) {
  const supabase = createSupabaseServerClient();
  const { data, table } = (await request.json()) as CartRoute;

  const { error } = await supabase.from(table).insert([data]);

  if (error) {
    return Response.json(error, {
      status: 500,
      statusText: "An Error Occurred",
    });
  }

  return Response.json(data, { status: 200, statusText: "OK!" });
}
