import { createSupabaseServerClient } from "@/app/_lib/supabase/server/supabaseInstance";
import { date } from "zod";

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

export const DELETE = async (request: Request) => {
  const supabase = createSupabaseServerClient();
  const { id } = (await request.json()) as { id: number };

  console.log(id);

  const { error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    return Response.json(error.message, {
      status: 500,
      statusText: "An error occurred",
    });
  }

  return Response.json(date, { status: 200, statusText: "Deleted!" });
};
