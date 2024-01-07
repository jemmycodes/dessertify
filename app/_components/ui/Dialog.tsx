import Image from "next/image"

interface Props {
  text: string | React.ReactNode;
  image: string;   
  heading: string;
  handleModal: () => void;
}

const Dialog = ({ handleModal, text, image, heading }: Props) => {
  return (
    <div className="fixed bg-black/50 p-3 top-0 w-screen h-screen left-0 flex justify-center items-center z-10">
      <div className="bg-white p-4 rounded-xl max-w-md flex gap-5 items-center flex-col">
              <h2 className="font-bold text-xl">{heading}</h2>
        <Image src={image} alt="sent image icon" className="w-full max-w-[10rem]"/>
        <p className="text-center font-medium">
          {text}
        </p>
        <button
          onClick={handleModal}
          className="bg-orange text-white rounded-full px-4 py-2 mt-3 w-full text-sm font-medium">
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialog;
