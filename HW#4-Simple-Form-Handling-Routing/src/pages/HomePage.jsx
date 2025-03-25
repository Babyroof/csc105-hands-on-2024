import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="min-w-screen">
        <Navbar />
        <div className="flex justify-center items-center">
          <p className="mt-50 flex items-center justify-center w-125 h-20 bg-amber-300 text text-center space-y-4 rounded-lg shadow">
            Hello, Welcome to the Home Page!
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
