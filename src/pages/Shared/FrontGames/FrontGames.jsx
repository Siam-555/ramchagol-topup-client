const FrontGames = ({ game }) => {
  const { name, image } = game;
  return (
    <div>
      <div className="card w-5/6 mx-auto bg-base-100 shadow-xl">
        <figure className="md:px-4 md:pt-4">
          <img src={image} className="md:rounded-xl " />
        </figure>
        <div className="flex flex-col px-2 pb-4 items-center text-center">
          <h2 className="card-title py-3 text-center text-xl">{name}</h2>
          <button className="btn btn-primary">See details</button>
        </div>
      </div>
    </div>
  );
};

export default FrontGames;