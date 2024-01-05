import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
interface Props {
  children: React.ReactNode;
  heading: string;
  btnText: string;
  extraText: React.ReactNode;
}

const AuthFormWrapper = ({ children, heading, btnText, extraText }: Props) => {
  return (
    <section className="p-6 bg-white rounded-xl flex justify-center items-center flex-col gap-2  w-[90%] max-w-[350px] ">
      <hgroup className="flex flex-col ">
        <h1 className="text-center font-bold text-2xl after:block after:p-[.15rem] after:w-5 after:mx-auto  after:mt-2 after:rounded-full after:bg-orange ">
          {heading}
        </h1>
      </hgroup>
      <form className="w-full flex flex-col gap-6 my-3">
        {children}
        <Link href="" className="text-right text-xs font-medium -mt-4  ">
          Forgot your Password?
        </Link>
        <button className="rounded-full text-sm font-medium bg-orange text-white w-full py-3 mt-3 shadow-lg hover:brightness-90 duration-300">
          {btnText}
        </button>
      </form>
      <button
        type="button"
        className="border rounded-full font-medium w-full py-3 text-sm flex justify-center items-center gap-2 mb-4">
        <FcGoogle className="text-xl" /> <p>Continue with Google</p>
      </button>
      {extraText}
    </section>
  );
};

export default AuthFormWrapper;
