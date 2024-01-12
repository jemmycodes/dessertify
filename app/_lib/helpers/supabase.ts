import { LoginUser } from "@/app/auth/login/page";
import { CreateUser } from "@/app/auth/signup/page";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";

export const supabaseClient = createClientComponentClient();

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
    console.log(error);
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

export const signUserOut = async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    return error;
  }

  return;
};
