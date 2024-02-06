const SectionTitle = ({ heading }) => {

  return (
    <div className="mx-auto my-4 w-3/5 md:w-5/12 text-center text-black">
      <h2 className="text-2xl md:text-4xl border-y-4 pb-2 border-double border-green-400 uppercase">{heading}</h2>
    </div>
  );
};

export default SectionTitle;