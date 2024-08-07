//  COMPONENTS
import EventsCategory from "../components/EventsPage/EventsCategory";
import BrowseCategories from "../components/EventsPage/BrowseCategories";
import QRCode from "../components/EventsPage/QRCode";
import MostLikedArtist from "../components/EventsPage/MostLikedArtist";

const EventsPage = () => {
  const data = [
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
    {
      title: "Latest Events",
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

  const data1 = [
    {
      title: "Music",
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
      title: "Comedy",
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
    <div className="pb-28 bg-website-purple bg-gradient-to-b from-website-purple-dark to-website-purple h-fit flex flex-col items-center justify-center w-screen gap-20 px-40 pt-40">
      <div className="bg-gradient-to-t from-black via-transparent to-black opacity-40 absolute inset-0 z-10"></div>
      {data.map((obj, index) => (
        <EventsCategory key={index} data={obj} />
      ))}
      <BrowseCategories />
      <QRCode />
      {data1.map((obj, index) => (
        <EventsCategory key={index} data={obj} />
      ))}
      <MostLikedArtist />
    </div>
  );
};

export default EventsPage;
