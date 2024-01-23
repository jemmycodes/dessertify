// import { type LoginUser } from "@/app/auth/login/page";
// import { type CreateUser } from "@/app/auth/signup/page";
// import { type PostgrestError } from "@supabase/supabase-js";
// import toast from "react-hot-toast";

// export const supabaseClient = createClientComponentClient();

// // const s

// // auth





// // database functions
// export const fetchTable = async (
//   name: string,
//   column: string = "*"
// ): Promise<{
//   data: MenuTypes[] | null;
//   error: PostgrestError | null;
// }> => {
//   const { data, error } = await supabaseClient.from(name).select(column);
//   // @ts-expect-error supabase-types-not-correctly-exported
//   return { data, error };
// };

// export const insertIntoTable = async (
//   tableName: string,
//   item: CartType
// ) => {
//  console.log("inserting")

//   const { error } = await supabaseClient.from(tableName).insert(item)
  
//   return error
// };

// export const fetchMenuById = async (id: string) => {
//   const { data, error } = await supabaseClient
//     .from("menu")
//     .select("*")
//     .eq("_id", id);

//   console.log("finished loading");
//   return { data, error };
// };

// export const fetchFilteredMenu = async (
//   query: string
// ): Promise<{
//   data: MenuTypes[] | null;
//   error: PostgrestError | null;
// }> => {
//   const { data, error } = await supabaseClient
//     .from("menu")
//     .select("*")
//     .filter("name", "ilike", `%${query}%`);

//   return { data, error };
// };
