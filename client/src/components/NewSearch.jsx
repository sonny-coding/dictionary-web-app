import { useForm } from "react-hook-form";
import { IconSearch } from "../assets/images";

const NewSearch = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center w-full bg-gray3 dark:bg-black2 text-black3 dark:text-white rounded-2xl"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        className="w-full bg-transparent text-[16px] leading-[17px] font-bold px-6 py-3 outline-none"
        defaultValue="test"
        {...register("word", { required: true })}
      />
      {errors.word && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
      <button
        type="submit"
        className="px-4 bg-transparent bg-black w-max h-max"
      >
        <IconSearch />
      </button>
    </form>
  );
};

export default NewSearch;
