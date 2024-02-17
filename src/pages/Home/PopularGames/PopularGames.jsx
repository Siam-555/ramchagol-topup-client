import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FrontGames from "../../Shared/FrontGames/FrontGames";

const PopularGames = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('games.json')
      .then(res => res.json())
      .then(data => {
        const popularGame = data.filter(game => game.category === 'popular');
        setGames(popularGame)
      })
  })

  return (
    <section className="bg-gray-300">
      <SectionTitle heading={"Popular Games"}></SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-4/5 mx-auto pb-6">{
        games.map(game => <FrontGames
          key={game._id}
          game={game}
        ></FrontGames>)
      }</div>
    </section>
  );
};

export default PopularGames;