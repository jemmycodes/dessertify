import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase.from("menu").select("*");

  if (error) {
    return Response.json({
      error: "An error occurred while fetching data",
    });
  }

  return Response.json({data});
}
