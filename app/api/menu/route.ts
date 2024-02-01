import { createSupabaseBrowserClient } from '@/app/_lib/supabase/client';


const supabase = createSupabaseBrowserClient();
export async function GET() {
  const { data, error } = await supabase.from("menu").select("*");

  if (error) {
    return Response.json(error, {
      status: 500,
      statusText: `An Error Occurred, ${error.message}`,
    });
  }

  return Response.json(data, { status: 200, statusText: "success!" });
}
