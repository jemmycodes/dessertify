"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Menu = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/menu/desserts");
  });

  return null;
};

export default Menu;
