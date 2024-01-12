import { Toaster } from "react-hot-toast";
import Navbar from "./navbar";

const PagesWrapper = ({ children }: Props) => {
  return (
    <>
    <Toaster/>
    <main className="w-full bg-orange/10 md:grid md:grid-cols-main-layout p-4 md:p-0 min-h-screen">
      <Navbar />
      {children}
      </main>
      </>
  );
};

export default PagesWrapper;
