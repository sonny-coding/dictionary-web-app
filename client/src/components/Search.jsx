import { IconSearch } from "../assets/images";

const Search = () => {
  return (
    <form
      className="w-full bg-gray3 rounded-2xl flex justify-center items-center focus:bg-black"
      action="submit"
    >
      <input
        className="w-full bg-transparent text-[20px] leading-[24px] font-bold px-6 py-3 outline-none focus:border-2 peer"
        type="text"
        placeholder="search a word"
      />
      <button
        type="submit"
        className="bg-transparent w-max h-max px-4 peer-focus:border-2"
      >
        <IconSearch />
      </button>
    </form>
  );
};

export default Search;
