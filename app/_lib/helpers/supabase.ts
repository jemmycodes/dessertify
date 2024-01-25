

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

