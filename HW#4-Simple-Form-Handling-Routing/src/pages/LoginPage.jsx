import { useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
const schema = z.object({
  email: z
    .string()
    .email("Please enter a valid email")
    .nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(formData);

    if (result.success) {
      setErrors({});
      navigate("/");
    } else {
      const errorMap = {};
      result.error.errors.forEach((err) => {
        errorMap[err.path[0]] = err.message;
      });
      setErrors(errorMap);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border bg-gray-200 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border bg-gray-200 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white p-2 rounded-2xl hover:bg-amber-600 transition-colors"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 hover:text-blue-700"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
