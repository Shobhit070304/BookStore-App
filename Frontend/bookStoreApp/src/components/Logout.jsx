import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      navigate("/")
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error : " + error.message);
    }
  };

  return (
    <>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
