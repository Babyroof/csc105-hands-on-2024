import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const schema = z.object({
  number: z
    .number({ invalid_type_error: "Expected number, received nan" })
    .min(1, { message: "Number must be at least 1" })
    .max(100, { message: "Number must be at most 100" }),
  q: z.enum(["love", "like"], {
    errorMap: () => ({ message: "Select either 'love' or 'like'" }),
  }),
  size: z.enum(["small", "medium", "large"], {
    errorMap: () => ({ message: "Select a valid size" }),
  }),
});

const FavouritesPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const { number, q, size } = data;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-white p-6 rounded-lg shadow"
          >
            <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
              Favourites Page
            </h1>
            <div>
              <label className="block mb-1">Number:</label>
              <input
                type="number"
                {...register("number", { valueAsNumber: true })}
                className={`w-full p-2 border rounded-2xl bg-gray-200 ${
                  errors.number ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1">Q:</label>
              <select
                {...register("q")}
                className={`w-full p-2 border border-black rounded-2xl bg-gray-200 ${
                  errors.q ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select</option>
                <option value="love">Love</option>
                <option value="like">Like</option>
              </select>
              {errors.q && (
                <p className="text-red-500 text-sm">{errors.q.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1">Size:</label>
              <select
                {...register("size")}
                className={`w-full p-2 border rounded-2xl bg-gray-200 ${
                  errors.size ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              {errors.size && (
                <p className="text-red-500 text-sm">{errors.size.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white p-2 rounded-full hover:bg-amber-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
