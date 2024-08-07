//  TYPES
import { TBrowseCategoriesCards } from "../../types/Components";

const BrowseCategoriesCards = ({ data }: TBrowseCategoriesCards) => {
  const navigateToCat = (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      console.log(data.title);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={navigateToCat} className="flex flex-shrink-0 flex-col gap-2 items-center">
      <img
        src={data.image}
        alt="madison"
        className="object-cover bg-center rounded w-[140px] h-[150px]"
      />
      <p className="text-white text-[12px]">{data.title}</p>
    </button>
  );
};

export default BrowseCategoriesCards;
