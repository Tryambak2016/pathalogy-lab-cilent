import React from "react";
import { User, Lock } from "lucide-react";
import { useAuth } from "../guard/AuthContext";
import microscope from "../assets/image.png";
import logo from "../assets/metacore.png";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ get login function from context

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});

      setTimeout(() => {
        if (
          formData.email === "admin@metacore.com" &&
          formData.password === "metacore@admin123"
        ) {
          const fakeToken =
            "ezydhlls_slldfushsvusetojeifsljbshusuubdvforisdhliuagvbliwerherhtuiergvblweurglewriug";

          login(fakeToken); // ✅ update context state
          navigate("/dashboard");
        } else {
          setErrors({ general: "Invalid email or password" });
          setIsSubmitting(false);
        }
      }, 2000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Panel - Image */}
      <div
        className="relative hidden lg:flex w-full lg:w-1/2 items-end p-10 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${microscope})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 space-y-2 max-w-lg">
          <h1 className="text-4xl font-semibold leading-tight">Metacore Pro</h1>
          <p className="text-lg">
            Advanced pathology laboratory management system for modern
            healthcare facilities
          </p>
        </div>
      </div>

      {/* Right Panel - Login */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center bg-pink-50 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-blue-200">
            {/* Header */}
            <div className="p-6 text-center bg-gradient-to-r from-purple-400 to-pink-400">
              <img
                src={logo}
                alt="MetaCore Logo"
                className="h-20 mx-auto mb-3 filter drop-shadow-lg"
              />
              <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Welcome to MetaCore
              </h1>
              <p className="mt-1 text-white/90">Please sign in to continue</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {errors.general && (
                <p className="text-red-600 text-center text-sm mb-2">
                  {errors.general}
                </p>
              )}

              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-green-500" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent placeholder-gray-400`}
                      placeholder="user@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-blue-500" />
                    </span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 rounded-lg border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-2 px-4 rounded-lg shadow-md text-lg font-medium text-white ${
                  isSubmitting
                    ? "bg-gradient-to-r from-purple-300 to-pink-300"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-all duration-300`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 
                        0 5.373 0 12h4zm2 5.291A7.962 
                        7.962 0 014 12H0c0 3.042 
                        1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="px-6 py-4 bg-white/90 border-t border-blue-100 text-center">
              <p className="text-sm text-gray-600 mb-1">Admin credentials:</p>
              <p className="text-xs text-gray-500">Email: admin@metacore.com</p>
              <p className="text-xs text-gray-500">
                Password: metacore@admin123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
