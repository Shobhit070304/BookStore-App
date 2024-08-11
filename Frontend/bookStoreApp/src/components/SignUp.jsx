import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axiosInstance from "../../src/axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axiosInstance.post("/user/signup", userInfo);
      if (res) {
        toast.success("User registered successfully!");
        navigate("/");
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (error) {
      if (error.response) {
        toast.error("Error : " + error.response.data.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="modal-box py-8 px-6 text-black border border-zinc-200 dark:bg-zinc-700">
          {/* if there is a button in form, it will close the modal */}
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to={"/"}>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">
                ✕
              </button>
            </Link>

            <h3 className="text-3xl text-zinc-800 mb-4 md:mb-8 dark:text-white">SignUp</h3>
            <label className="text-sm text-zinc-500 dark:text-white" htmlFor="name">
              Name
            </label>
            <input
              type="name"
              className="w-full py-2 px-3 rounded-md bg-zinc-200 border border-zinc-200 outline-none my-2"
              placeholder="name"
              name="name"
              id="name"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <p className="text-sm text-red-500">
                This field is required
              </p>
            )}
          
            
            <label className="text-sm text-zinc-500 dark:text-white">Email</label>
            <input
              type="email"
              className="w-full py-2 px-3 rounded-md bg-zinc-200 border border-zinc-200 outline-none my-2"
              placeholder="email"
              name="email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <p className="text-sm text-red-500">
                This field is required
              </p>
            )}
            
            <label className="text-sm text-zinc-500 dark:text-white">Password</label>
            <input
              type="password"
              className="w-full py-2 px-3 rounded-md bg-zinc-200 border border-zinc-200 outline-none my-2 "
              placeholder="password"
              name="password"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <p className="text-sm text-red-500">
                This field is required
              </p>
            )}
            <div className="w-full flex flex-col items-center">
              <button className="w-full  py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 my-4">
                Signup
              </button>
              <p className="text-zinc-500 text-sm mt-2 dark:text-white">
                Already have an account?{" "}
                <button
                  className="text-blue-400 underline hover:text-blue-500 cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignUp;
