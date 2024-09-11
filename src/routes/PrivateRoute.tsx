import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.user);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
