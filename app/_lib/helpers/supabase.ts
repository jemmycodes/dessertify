import { LoginUser } from "@/app/auth/login/page";
import { CreateUser } from "@/app/auth/signup/page";
import { createBrowserClient } from "@supabase/ssr";
import toast from "react-hot-toast";

export const supabaseClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const signupWithEmail = async (fields: CreateUser) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email: fields.email,
    password: fields.password,
    options: {
      data: {
        email: fields.email,
        firstname: fields.firstname,
        lastname: fields.lastname,
      },
    },
  });

  if (error) {
    toast.error(error.message);
    console.log(error)
    return;
  }

  return data
};

export const loginWithEmail = async ({email, password}: LoginUser) => {
  const {data, error} = await supabaseClient.auth.signInWithPassword({email, password})

  if (error) {
    toast.error(error.message);
    console.log(error)
    return
  }

  console.log(error, data)

  return data
}