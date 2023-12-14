import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-5xl font-bold text-gray-300">404</h1>
        <p className="text-xl text-gray-300">Page Not Found</p>
        <Link
          to="/"
          className="mt-4 py-2 px-4 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
