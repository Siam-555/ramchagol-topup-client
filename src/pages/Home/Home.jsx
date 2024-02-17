import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularGames from "./PopularGames/PopularGames";
import Overview from "./Overview/Overview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RamChagol TopUp | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <Overview></Overview>
    </div>
  );
};

export default Home;