//  TYPES
import { TBrowseCategoriesCards } from "../../types/Components";

const ArtistCard = ({ data }: TBrowseCategoriesCards) => {
  const navigateToCat = (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      console.log(data.title);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={navigateToCat}
      className="shrink-0 flex flex-col items-center gap-2"
    >
      <img
        src={"/".concat(data.image)}
        alt="madison"
        className="object-cover bg-center rounded-full w-[140px] h-[150px]"
      />
      <p className="text-white text-[12px]">{data.title}</p>
    </button>
  );
};

export default ArtistCard;
