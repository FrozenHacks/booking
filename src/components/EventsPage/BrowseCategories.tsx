import BrowseCategoriesCards from "./BrowseCategoriesCards";

const BrowseCategories = () => {
  const data = [
    {
      image: "madisonp.jpg",
      title: "Music",
    },
    {
      image: "madisonp1.jpg",
      title: "Tech",
    },
    {
      image: "madisonp2.jpg",
      title: "Travel Adeventure",
    },
    {
      image: "madisonp3.jpg",
      title: "Comedy",
    },
    {
      image: "madisonp4.png",
      title: "Theatre",
    },
    {
      image: "madisonp5.jpg",
      title: "Photography",
    },
    {
      image: "madisonp.jpg",
      title: "Fashion",
    },
  ];

  return (
    <div className="h-fit z-40 flex flex-col w-full">
      <div className="flex items-center justify-between w-full">
        <span className="text-xl text-white">Browse by Categories</span>
        <button className="text-white/70 text-sm">View All</button>
      </div>

      <div className="flex w-full flex-shrink-0 gap-5 overflow-y-scroll items-center justify-between mt-10">
        {data.map((obj, index) => (
          <BrowseCategoriesCards key={index} data={obj} />
        ))}
      </div>
    </div>
  );
};

export default BrowseCategories;
