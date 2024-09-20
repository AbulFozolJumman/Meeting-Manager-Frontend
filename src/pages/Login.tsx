import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { setEmail, setPassword } from "../redux/features/loginSlice";
import { setToken, setUser } from "../redux/features/userSlice";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { email, password } = useAppSelector((state: RootState) => state.login);

  const [login] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login({ email, password }).unwrap();
      const token = data?.token;
      const user = data?.data;

      console.log("token", token, "user:", user);
      dispatch(setToken(token));
      dispatch(setUser(user));
      alert("Login successful.");
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      navigate("/");
    } catch (error: any) {
      alert(error?.data?.message || "An error occurred during login.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-red-700">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white rounded-md shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/signup" className="text-red-600 hover:underline">
            New here? Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
