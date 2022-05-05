import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return <div>
    <ul>
      {featuredEvents.map((event)=> <li> </li>)}
    </ul>
  </div>;
};

export default HomePage;
