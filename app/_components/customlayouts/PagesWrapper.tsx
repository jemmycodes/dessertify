import Navbar from "./Navbar";
import Header from "./Header";

const PagesWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="  bg-gray-100 md:grid  md:grid-cols-main-layout  min-h-screen ">
        <Navbar />
        <div>
          <Header />
          <div className="max-w-6xl py-3 px-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default PagesWrapper;
