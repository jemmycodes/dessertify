import { useState } from "react";
import toast from "react-hot-toast";
import { createSupabaseBrowserClient } from "@/app/_lib/supabase/client";

const supabase = createSupabaseBrowserClient();

interface Message {
  loading: string;
  success: string;
  error: string;
}

const useSendToDb = <T,>(
  table: string,
  item: T,
  message: Message,
  onConflict: string
) => {
  const [loading, setLoading] = useState(false);

  const sendToDb = async () => {
    setLoading(true);
    const toastID = toast.loading(message.loading);
    const { error } = await supabase.from(table).upsert(item, { onConflict });

    if (error) {
      console.log(error);
      toast.error(message.error, { id: toastID });
      setLoading(false);
      return;
    }

    toast.success(message.success, { id: toastID });
    setLoading(false);
  };

  return { loading, sendToDb };
};

export default useSendToDb;
