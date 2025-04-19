import { useAuth } from "@/context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const { loginAuth, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLocalError("");

    const password = passwordRef.current?.value;
    const email = emailRef.current?.value;

    if (!email || !password) {
      setLocalError("Email and password are required.");
      setLoading(false);
      return;
    }

    loginAuth({ credientials: { email, password } });
  };

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
      navigate("/dashboard");
    } else if (error) {
      setLoading(false);
      setLocalError(error);
    }
  }, [isAuthenticated, error]);

  return (
      <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center px-4">
        {/* Error Modal */}
        {localError && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-lg font-semibold mb-2 text-red-600">Login Error</h2>
              <p className="text-sm text-gray-700">{localError}</p>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setLocalError("")}
                  className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg transform animate-fade-in-up">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember_me" className="mr-2" />
              <label htmlFor="remember_me" className="text-sm text-gray-600">
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          <div className="mt-6 text-sm text-center text-gray-600">
            <Link to="/register" className="text-blue-600 hover:underline">
              Create an account
            </Link>{" "}
            ·{" "}
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </section>
  );
};

export default Login;
