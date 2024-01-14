import Link from "next/link";

const MenuCard = ({
  name,
  description,
  photoUrl,
  _id,
  category,
  slug,
}: MenuTypes) => {
  return (
    <Link
      className=" shadow-lg  bg-white rounded-md flex  justify-between"
      href="">
      <img
        src={photoUrl}
        loading="lazy"
        alt={`Image of  a ${name}`}
        width={70}
        height={75}
        className="object-cover w-full  max-w-[40%] rounded-l-md"
      />
      <div className="flex flex-col justify-between p-3 gap-3">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="line-clamp-3 text-sm">{description}</p>
        <button className="bg-orange px-4 py-2 rounded-md text-white text-sm font-medium hover:brightness-95 duration-500 transition-all">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default MenuCard;
