import { useState } from "react";
import toast from "react-hot-toast";
import { createSupabaseBrowserClient } from "../supabase/client";

const supabase = createSupabaseBrowserClient();

export const useUpdateRow = (table: string, column: string, id: number) => {
  const [loading, setLoading] = useState(false);

  const updateRow = async () => {
    const toastID = toast.loading("Adding to cart");
    setLoading(true);

    const { error } = await supabase
      .from("table")
      .update({ column })
      .eq("id", id);

    if (error) {
      toast.error(`Cannot add  to cart`, { id: toastID });
      setLoading(false);
      return;
    }

    toast.success("Added to cart", { id: toastID });
    setLoading(false);
  };

  return { loading, updateRow };
};
