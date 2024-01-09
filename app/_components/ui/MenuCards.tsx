import Image from "next/image";

const MenuCard = ({
  name,
  description,
  photoUrl,
  _id,
  category,
}: MenuTypes) => {
  return (
    <li className="  px-6 py-4 bg-white rounded-md flex gap-4  justify-between">
      <img
        src={photoUrl}
        loading="lazy"
        alt={`Image of  a ${name}`}
        className="object-cover max-w-[6rem] h-36 rounded-md"
      />
      <div className="flex flex-col justify-between  ">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="line-clamp-3 text-sm">{description}</p>
        <button className="bg-orange px-4 py-2 rounded-md text-white text-sm font-medium hover:brightness-95 duration-500 transition-all">
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default MenuCard;
