import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const overview = () => {
  return (
    <section>
      <SectionTitle heading={"Contact Us"}></SectionTitle>
      <div className="flex flex-col w-5/6 mx-auto items-center md:flex-row">
        <div className="p-6 md:w-1/2 bg-zinc-500 text-white rounded-xl">
          <h2 className="text-3xl text-black mb-4 pb-1 border-b-2 w-1/2 rounded-xl mx-auto text-center border-teal-300 font-semibold">Get In Touch</h2>
          <h3 className="text-lg">I would like to receive news and special offers from RamChagol:</h3>
          <div className="join py-4">
            <input className="input input-bordered join-item text-white bg-gray-700" placeholder="Email" />
            <button className="btn join-item rounded-r-lg">Subscribe</button>
          </div>
          <p>You may also unsubscribe at any time by clicking “Unsubscribe” at the bottom of each promotional email that we send to you. For more information, please read our <a href="#" className="text-blue-900">Privacy Policy</a>.</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="">

        </div>
      </div>
    </section>
  );
};

export default overview;