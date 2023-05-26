const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[100px]">
      <p className="text-5xl">😕</p>
      <p className="mt-[38px] font-bold text-[20px] leading-[24px] text-black3 dark:text-white">
        No definitions Found
      </p>
      <p className="mt-[30px] font-normal text-[18px] leading-[24px] text-gray1 ">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search engine again at later time or head
        to the web instead.{" "}
      </p>
    </div>
  );
};

export default Error;
