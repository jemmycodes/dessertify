

import { MenuTypes } from 'path/to/MenuTypes'; // Replace 'path/to/MenuTypes' with the actual path to the MenuTypes module.

const MenuCard = ({
    name,
    description,
    photoUrl,
    _id,
    category,
}: MenuTypes) => {
  return <li>{name}</li>;
};

export default MenuCard;
