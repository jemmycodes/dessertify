import { supabase } from "@/app/_lib/supabase/client/supabaseInstance";

export async function GET() {
  const { data, error } = await supabase.from("menu").select("*");

  if (error) {
    return Response.json(error, {
      status: 500,
      statusText: "An Error Occurred",
    });
  }

  console.log(data, error);

  return Response.json(data, { status: 200 });
}
