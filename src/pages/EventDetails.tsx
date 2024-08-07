import { useRef } from "react";

//  COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MostLikedArtist from "../components/EventsPage/MostLikedArtist";
import EventCard from "../components/EventDetails/EventCard";
import EventsCategory from "../components/EventsPage/EventsCategory";

const EventDetails = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const data = [
    {
      title: "Similar Events You Might Like",
      carousel: [
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
      ],
    },
    {
      title: "Trending Events",
      carousel: [
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
      ],
    },
  ];

  return (
    <div className="h-fit relative flex flex-col items-center w-screen overflow-y-scroll">
      <Navbar ModalRef={ref} />
      <div className="py-28 bg-website-purple h-fit shrink-0 flex flex-col items-start w-full gap-10 px-40">
        <div className="opacity-40 absolute inset-0 z-10 bg-black"></div>
        <EventCard />
        {data.map((obj, index) => (
          <EventsCategory key={index} data={obj} />
        ))}
        <MostLikedArtist />
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
