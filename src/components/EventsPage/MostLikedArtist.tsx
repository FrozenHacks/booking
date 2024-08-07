//  COMPONENTS
import ArtistCard from "./ArtistCard";

const MostLikedArtist = () => {
  const data = [
    {
      image: "madisonp.jpg",
      title: "Madison Beer",
    },
    {
      image: "madisonp1.jpg",
      title: "Lana Del Rey",
    },
    {
      image: "madisonp2.jpg",
      title: "Mohit Chauhan",
    },
    {
      image: "madisonp3.jpg",
      title: "DJ Snake",
    },
    {
      image: "madisonp4.png",
      title: "Madison Beer",
    },
    {
      image: "madisonp5.jpg",
      title: "Madison Beer",
    },
    {
      image: "madisonp.jpg",
      title: "Madison Beer",
    },
  ];

  return (
    <div className="h-fit z-40 flex flex-col w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img
            src="/icons/Artist.png"
            alt="Art"
            className="object-fit w-[19px] h-[16px]"
          />
          <span className="text-xl text-white">Most Liked Artist</span>
        </div>
        <button className="text-white/70 text-sm">View All</button>
      </div>

      <div className="flex items-center justify-between shrink-0 gap-5 w-full mt-10 overflow-y-scroll">
        {data.map((obj, index) => (
          <ArtistCard key={index} data={obj} />
        ))}
      </div>
    </div>
  );
};

export default MostLikedArtist;
