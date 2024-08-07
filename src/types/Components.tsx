export type TEventsCard = {
  data: TEventsCategoryCard;
};

export type TEventsCategory = {
  data: {
    title: string;
    carousel: Array<TEventsCategoryCard>;
  };
};

export type TEventsCategoryCard = {
  title: string;
  image: string;
  rating: number;
  dateTime: string;
  location: string;
};

export type TBrowseCategoriesCards = {
  data: {
    image: string;
    title: string;
  };
};

export type TNavbar = {
  ModalRef: React.RefObject<HTMLDivElement>;
};

export type TQandACard = {
  quest: string;
};

export type TCarouselCard = {
  img: string;
};

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type TTerms = {
  data: {
    title: string;
    terms: string[];
  };
};