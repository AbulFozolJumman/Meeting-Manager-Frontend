import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
  setPhone,
} from "../redux/features/SignupSlice";
import { useSignupMutation } from "../redux/api/auth/authApi";

const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name, email, password, role, phone, address } = useAppSelector(
    (state: RootState) => state.signup
  );

  const [signup] = useSignupMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signup({
        name,
        email,
        password,
        role,
        phone,
        address,
      }).unwrap();

      alert("User Registered Successfully");
      console.log(result);
      dispatch(setName(""));
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      dispatch(setPhone(""));
      dispatch(setAddress(""));
      navigate("/login");
    } catch (error: any) {
      alert(error.data?.message);
      console.log(error.data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-red-700">Signup</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
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
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => dispatch(setAddress(e.target.value))}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white rounded-md shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
          >
            Signup
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
