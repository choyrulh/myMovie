const MovieDetailsSkeleton = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="animate-pulse">
        <h1 className="text-3xl font-bold mb-4 bg-gray-500 h-8 w-1/2"></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-md shadow-md bg-gray-500 h-64"></div>
          <div>
            <p className="mb-2 bg-gray-500 h-4 w-1/2"></p>
            {/* Repeat the pattern for other details */}
          </div>
        </div>
        <p className="mt-4 bg-gray-500 h-6 w-full"></p>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
