//  TYPES
import { TCarouselCard } from "../types/Components";

const CarouselCard = ({ img }: TCarouselCard) => {
  return (
    <div className="embla__slide rounded-2xl w-full h-full ml-4 mr-4 overflow-hidden text-white">
      <img
        className="object-cover w-full h-full bg-center bg-no-repeat"
        src={img}
        alt={img}
      />
    </div>
  );
};

export default CarouselCard;
