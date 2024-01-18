import { type LoginUser } from "@/app/auth/login/page";
import { type CreateUser } from "@/app/auth/signup/page";
import { type PostgrestError } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";

export const supabaseClient = createClientComponentClient();

// auth

export const signupWithEmail = async (fields: CreateUser) => {
  const { email, password, firstname, lastname } = fields;

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
      data: { email, firstname, lastname },
    },
  });

  if (error) {
    toast.error(error.message);
    return;
  }

  return data;
};

export const loginWithEmail = async ({ email, password }: LoginUser) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error(error.message || "An error occurred");
    return;
  }

  return data;
};

export const signUserOut: () => Promise<void> = async () => {
  const toastID = toast.loading("Signing out...");

  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    toast.error("An error occurred!, please try again", { id: toastID });
    return;
  }

  toast.success("You have been signed out, redirecting...", { id: toastID });
  window.location.href = "/auth/login";

  return;
};

// database functions
export const fetchTable = async (
  name: string,
  column: string = "*"
): Promise<{
  data: MenuTypes[] | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabaseClient.from(name).select(column);
  // @ts-expect-error supabase-types-not-correctly-exported
  return { data, error };
};

export const fetchMenuById = async (id: string) => {
  console.log("loading")
  const { data, error } = await supabaseClient
    .from("menu")
    .select("*")
    .eq("_id", id);

  console.log("finished loading")
  return { data, error };
};

export const fetchFilteredMenu = async (
  query: string
): Promise<{
  data: MenuTypes[] | null;
  error: PostgrestError | null;
}> => {
  const { data, error } = await supabaseClient
    .from("menu")
    .select("*")
    .filter("name", "ilike", `%${query}%`);

  return { data, error };
};
