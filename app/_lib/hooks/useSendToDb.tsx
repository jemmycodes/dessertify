import {  useState } from "react";
import toast from "react-hot-toast";
import { createSupabaseBrowserClient } from "@/app/_lib/supabase/client";

const supabase = createSupabaseBrowserClient();

interface Message {
  loading: string;
  success: string;
  error: string;
}

const useSendToDb = <T,>(table: string, item: T, message: Message) => {
    const [loading, setLoading] = useState(true);
    
    const sendToDb = async () => {
      const toastID = toast.loading(message.loading);
      const { error } = await supabase.from(table).insert(item);

      if (error) {
        toast.error(message.error, { id: toastID });
        return;
      }

      setLoading(false);
      toast.success(message.success, { id: toastID });
    };

  return { loading, sendToDb };
};

export default useSendToDb;
