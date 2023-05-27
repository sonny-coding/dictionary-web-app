import { useForm } from "react-hook-form";
// import { IconSearch } from "../assets/images";

// eslint-disable-next-line react/prop-types
const Search = ({ word, setWord }) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const onSubmit = (data) => {
    console.log(data);
    setWord(data.textInput);
  };

  const border = errors?.textInput ? "focus:border-red" : "focus:border-purple";

  // console.log(watch("example")); // watch input value by passing the name of it
  console.log(errors);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className={`w-full bg-gray3 dark:bg-black2 text-[16px] leading-[17px] font-bold placeholder:text-gray1 pl-4 pr-8 py-3 outline-none  text-black3 dark:text-white rounded-2xl focus:border-[1px] ${border}`}
          defaultValue={word}
          placeholder="search for any word..."
          {...register("textInput", { required: "Whoops, can't be empty..." })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        {/* <input type="submit" /> */}
        {/* <button
          type="submit"
          className="px-4 bg-transparent bg-black w-max h-max"
        >
          <IconSearch />
        </button> */}
      </form>
      <div className="flex items-center w-full h-4 mt-2 text-[14px] leading-[15px] px-1 font-normal text-red ">
        <span>{errors?.textInput?.message}</span>
      </div>
    </div>
  );
};

export default Search;
