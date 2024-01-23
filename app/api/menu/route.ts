import { createClient } from "@supabase/supabase-js";

export async function GET() {
import { createClient } from "@supabase/supabase-js";


  const { data, error } = await supabase.from("menu").select("*");

  if (error) {
    return Response.json({
      error: "An error occurred while fetching data",
    });
  }

  return Response.json({data});
}
