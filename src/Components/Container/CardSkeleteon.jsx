const CardSkeleton = ({ label, count = 8 }) => {
  return (
    <div className="h-[250px] w-[100%] flex flex-row gap-2 justify-evenly">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="h-[250px] w-40 relative overflow-hidden rounded-lg animate-pulse"
        >
          <div className="h-[200px] w-full bg-slate-200 rounded-lg"></div>
          <div className="w-full h-[50%] bg-gradient-to-t from-slate-400 to-transparent flex flex-row justify-center items-center">
            <div className="h-4 w-full bg-slate-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
