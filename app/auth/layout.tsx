import Image from "next/image";
import type { ReactNode } from "react";         
import dessertBg from "../../public/dessert-bg.jpeg";

const AuthenticationLayout = ({ children }:{children: ReactNode}) => {
  return (
    <>
      <main className=" w-screen h-screen bg-auth-page-bg flex justify-center items-center">
        <Image
          src={dessertBg}
          alt="An image showing different desserts"
          className="fixed w-screen h-screen -z-10 object-cover brightness-50"
        />
        {children}
      </main>
    </>
  );
};

export default AuthenticationLayout;
