import { useMemo, useRef } from "react";

//  COMPONENTS
import EventsCard from "../EventsPage/EventsCard";

const SearchResult = () => {
  //  * REPLACE WITH OG DATA FROM BACKEND
  const tempCardData = useRef([
    {
      image: "madisonp.jpg",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp1.jpg",
      title: "High On U1 Concert",
      rating: 4,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp2.jpg",
      title: "Isai Gallata Concert",
      rating: 4,
      dateTime: "June 10th | 5PM Onwards",
      location: "YMCA, Chennai",
    },
    {
      image: "madisonp3.jpg",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp4.png",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp5.jpg",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp3.jpg",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp4.png",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp5.jpg",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp4.png",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp5.jpg",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp3.jpg",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp4.png",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
    {
      image: "madisonp5.jpg",
      title: "Sunburn Music Fest",
      rating: 4.5,
      dateTime: "June 10th | 5PM Onwards",
      location: "Nehru Park, Chennai",
    },
  ]);

  const cards = useMemo(
    () =>
      tempCardData.current.map((obj, index) => (
        <EventsCard key={index} data={obj} />
      )),
    [tempCardData]
  );

  return (
    <div className="h-fit z-20 flex flex-col w-full mt-5">
      <h2 className="text-2xl text-white">Events in Chennai</h2>
      <div className="grid w-full grid-cols-3 gap-5 mt-4">{cards}</div>
    </div>
  );
};

export default SearchResult;
