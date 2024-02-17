const SectionTitle = ({ heading }) => {

  return (
    <div className="mx-auto my-4 mb-10 pt-2 w-3/5 md:w-5/12 text-center text-black">
      <h2 className="text-2xl md:text-4xl border-b-8 pb-2 border-double font-bold border-blue-400 uppercase">{heading}</h2>
    </div>
  );
};

export default SectionTitle;