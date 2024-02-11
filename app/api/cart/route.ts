import { createSupabaseServerClient } from "@/app/_lib/supabase/server";


export const GET = async () => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from("cart").select("*");

  if (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      statusText: "An error occurred!",
    });
  }


  return Response.json(data, { status: 200, statusText: "OK!" });
};

