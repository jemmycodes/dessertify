import { type LoginUser } from "./../../auth/login/page";
import { type CreateUser } from "./../../auth/signup/page";
import toast from "react-hot-toast";
import { createSupabaseBrowserClient } from "./supabaseInstance";

const supabaseClient = createSupabaseBrowserClient();

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

  console.log(data, error);

  if (error) {
    toast.error(error.message);
    return;
  }

  return data;
};
