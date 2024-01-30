// eslint-disable

import { cookies } from "next/headers";
import { type Database } from "../../types/supabase";
import {
  createServerClient,
  type CookieOptions,
} from "@supabase/ssr";

export const createSupabaseServerClient = () => {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          // eslint-disable-next-line
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          // eslint-disable-next-line
          cookieStore.set({ name, value: "", ...options }) as any;
        },
      },
    }
  );
};

export const createSupabaseServerComponent = (
  cookieStore: ReturnType<typeof cookies>
) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
};
