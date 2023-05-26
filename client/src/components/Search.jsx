import { IconSearch } from "../assets/images";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Search = ({ setWord }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(input);
    // console.log(word);
    // alert(input);
    // alert(word);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form
      className="flex items-center justify-center w-full bg-gray3 dark:bg-black2 text-black3 dark:text-white rounded-2xl"
      action="submit"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full bg-transparent text-[16px] leading-[17px] font-bold px-6 py-3 outline-none  "
        type="text"
        placeholder="search for any word..."
        value={input}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="px-4 bg-transparent bg-black w-max h-max"
      >
        <IconSearch />
      </button>
    </form>
  );
};

export default Search;
