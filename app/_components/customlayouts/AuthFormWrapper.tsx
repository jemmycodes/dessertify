
interface FormWrapperProps extends Props {
  heading: string;
}

const AuthFormWrapper = ({ children, heading }: FormWrapperProps) => {
  return (
    <section className="p-6 bg-white rounded-xl flex justify-center items-center flex-col gap-2 overflow-y-scroll   w-[90%] max-w-[350px] ">
      <hgroup className="flex flex-col ">
        <h1 className="text-center font-bold text-2xl after:block after:p-[.15rem] after:w-5 after:mx-auto  after:mt-2 after:rounded-full after:bg-orange ">
          {heading}
        </h1>
      </hgroup>
      <form className="w-full flex flex-col gap-6 my-3">
        {children}
     
          </form>
    </section>
  );
};

export default AuthFormWrapper;
