import { IconSearch } from "../assets/images";

// eslint-disable-next-line react/prop-types
const Search = ({ word, setWord, toggleValidated, fetchWord }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // toggleValidated();
    // alert(word);
    fetchWord(word);
  };
  const handleChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <form
      className="w-full bg-gray3 rounded-2xl flex justify-center items-center focus:bg-black"
      action="submit"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full bg-transparent text-[20px] leading-[24px] font-bold px-6 py-3 outline-none focus:border-2 peer"
        type="text"
        placeholder="search a word"
        value={word}
        onChange={handleChange}
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
