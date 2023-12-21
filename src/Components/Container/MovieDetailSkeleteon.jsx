const MovieDetailsSkeleton = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto my-8">
      <div className="animate-pulse">
        <div className="min-h-screen mx-auto rounded-lg shadow-md shadow-gray-600 overflow-hidden">
          <div className="text-3xl font-bold mb-4 text-center bg-gray-300 h-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-7">
            <div className="rounded-md shadow-2xl min-h-full bg-gray-300"></div>
            <div>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
              <p className="mb-2 bg-gray-300 h-4"></p>
            </div>
          </div>
          <p className="mt-4 mx-7 bg-gray-300 h-20"></p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
