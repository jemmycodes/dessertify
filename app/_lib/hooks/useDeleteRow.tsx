import { useState } from "react";
import toast from "react-hot-toast";
import type { Message } from "./useSendToDb";
import { createSupabaseBrowserClient } from "../supabase/client";

const supabase = createSupabaseBrowserClient();

const useRemoveRow = (table: string, id: number, message: Message) => {
  const [loading, setLoading] = useState(false);

  const removeRow = async () => {
    const toastID = toast.loading(message.loading);
    try {
      const { error } = await supabase.from(table).delete().eq("id", id);

      if (error) throw new Error(error.message);

      toast.success(message.success, { id: toastID });
    } catch (error) {
      console.log(error);
      toast.error(message.error, { id: toastID });
    } finally {
      setLoading(false);
    }
  };

  return { loading, removeRow };
};

export default useRemoveRow;
