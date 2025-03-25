import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-red-500">404 - Page Not Found</h2>
        <p className="text-lg mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;