import Image from "next/image";
import { TbCameraPlus } from "react-icons/tb";

const ProfileHeader = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <header className="relative w-screen flex justify-center items-center  -top-4">
        <Image
          src="https://i.pinimg.com/736x/da/fc/3a/dafc3addfd37737b93fa9ecce064f73d.jpg"
          className="w-screen object-cover  h-56 absolute "
          alt="header"
          width={150}
          height={150}
        />
        <div className="outline outline-orange bg-white w-28 aspect-square h-28  rounded-full relative ">
          <Image
            src="https://i.pinimg.com/736x/da/fc/3a/dafc3addfd37737b93fa9ecce064f73d.jpg"
            width={70}
            height={100}
            alt="Profile Image"
            className="absolute w-full h-full rounded-full  object-cover"
          />
          <div className=" bg-black/30  z-30 w-full h-full rounded-full  absolute flex items-center justify-center">
            <TbCameraPlus className="text-5xl text-white" />
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default ProfileHeader;
