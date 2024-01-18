interface FormWrapperProps extends Props {
  heading: string;
  onSubmitForm: () => unknown;
}

const AuthFormWrapper = ({
  children,
  heading,
  onSubmitForm,
}: FormWrapperProps) => {
  return (
    <section className="p-6 bg-white rounded-xl flex justify-center items-center flex-col gap-2 overflow-y-scroll   w-[90%] max-w-[350px] ">
      <hgroup className="flex flex-col ">
        <h1 className="text-center font-bold text-2xl after:block after:p-[.15rem] after:w-5 after:mx-auto  after:mt-2 after:rounded-full after:bg-orange ">
          {heading}
        </h1>
      </hgroup>
      <form
        className="w-full flex flex-col gap-6 my-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}>
        {children}
      </form>
    </section>
  );
};

export default AuthFormWrapper;
