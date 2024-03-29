import { useState } from "react";
import toast from "react-hot-toast";
import { createSupabaseBrowserClient } from "@/app/_lib/supabase/client";
import { itemInDb } from "../helpers/utils";

const supabase = createSupabaseBrowserClient();

export interface Message {
  loading: string;
  success: string;
  error: string;
}

interface CartItem {
  quantity: number;
  product_id: string;
}

const useSendToDb = <T extends CartItem>(
  table: string,
  item: T,
  message: Message
) => {
  const [loading, setLoading] = useState(false);

  const sendToDb = async () => {
    const toastID = toast.loading(message.loading);
    setLoading(true);

    const { error, data: cartItem } = await itemInDb(message.error, "cart", {
      name: "product_id",
      value: item.product_id,
    });

    console.log(error);

    if (error) return;

    if (cartItem) {
      const { product_id, quantity } = cartItem;

      const { error } = await supabase
        .from(table)
        .update({ quantity: quantity + item.quantity })
        .eq("product_id", product_id);

      if (error) {
        toast.error(message.error, { id: toastID });
        setLoading(false);

        return;
      }
      toast.success(message.success, { id: toastID });
      setLoading(false);

      return;
    } else {
      const { error: err } = await supabase.from(table).insert(item);

      if (err) {
        toast.error(message.error, { id: toastID });
        setLoading(false);

        return;
      }

      toast.success(message.success, { id: toastID });
      setLoading(false);
      return;
    }
  };

  return { loading, sendToDb };
};

export default useSendToDb;
