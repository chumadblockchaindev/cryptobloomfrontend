import api from "@/api";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [referral, setReferral] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refCode = params.get("ref");
    if (refCode) setReferral(refCode);
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    setLoading(true);
    localStorage.clear();

    try {
      const res = await api.post("/register/", formObject);
      if (res.status === 201) {
        localStorage.setItem("ACCESSTOKEN", res.data.access);
        localStorage.setItem("REFRESHTOKEN", res.data.refresh);
        navigate("/login");
      }
    } catch (error: any) {
      const errMsg = error?.response?.data?.detail || "Something went wrong. Please try again.";
      setErrorModal(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* Error Modal */}
      {errorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-md w-full max-w-sm">
            <h2 className="text-lg font-semibold text-red-600 mb-2">Error</h2>
            <p className="text-gray-700 mb-4">{errorModal}</p>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 w-full"
              onClick={() => setErrorModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-md animate-fade-in-up bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="referral"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
            placeholder="Referral (optional)"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-start">
            <input
              type="checkbox"
              required
              className="mr-2 mt-1"
              id="terms"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-blue-500">terms and conditions</a>.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
          >
            {loading && (
              <svg
                className="w-5 h-5 animate-spin text-white"
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
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                />
              </svg>
            )}
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
