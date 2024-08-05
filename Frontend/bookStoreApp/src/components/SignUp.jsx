import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axiosInstance from "../../src/axios";
import toast from "react-hot-toast";

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
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="modal-box py-8 px-6 text-black border border-zinc-200">
        {/* if there is a button in form, it will close the modal */}
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <Link to={"/"}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </Link>

          <h3 className="text-3xl text-zinc-800 mb-4 md:mb-8">SignUp</h3>
          <label className="text-sm text-zinc-500" htmlFor="name">
            Name
          </label>
          <input
            type="name"
            className="w-full py-2 px-3 rounded-md md:mb-6 bg-zinc-200 border border-zinc-200 outline-none my-2"
            placeholder="name"
            name="name"
            id="name"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <br />
          <label className="text-sm text-zinc-500">Email</label>
          <input
            type="email"
            className="w-full py-2 px-3 rounded-md md:mb-6 bg-zinc-200 border border-zinc-200 outline-none my-2"
            placeholder="email"
            name="email"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <br />
          <label className="text-sm text-zinc-500">Password</label>
          <input
            type="password"
            className="w-full py-2 px-3 rounded-md md:mb-6 bg-zinc-200 border border-zinc-200 outline-none my-2 "
            placeholder="password"
            name="password"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <div className="w-full flex flex-col items-center">
            <button className="w-full  py-2 rounded-md text-white bg-blue-600 my-4">
              Signup
            </button>
            <p className="text-zinc-500 text-sm mt-2">
              Already have an account?{" "}
              <button
                className="text-blue-500 underline hover:text-blue-800 cursor-pointer"
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
  );
};

export default SignUp;
