import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

const PagesWrapper = ({ children }: Props) => {
  return (
    <main className="w-full bg-orange/10 min-h-screen md:grid-cols-main-layout">
      <Navbar />
      {children}
    </main>
  );
};

export default PagesWrapper;
