import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Arrow = () => {
  return (
    <>
      <div className="flex flex-row items-center text-3xl gap-2">
        <HiChevronLeft className="rounded-full hover:text-blue-500 hover:outline cursor-pointer" />
        <HiChevronRight className="rounded-full hover:text-blue-500 hover:outline cursor-pointer" />
      </div>
    </>
  );
};

export default Arrow;
