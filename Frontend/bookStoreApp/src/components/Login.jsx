import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../../src/axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axiosInstance.post("/user/login", userInfo);
      if (res) {
        toast.success("LoggedIn Successfully");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error : " + error.response.data.message);
      }
    }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box py-8 px-6 text-black dark:bg-zinc-700">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-ghost absolute right-2 top-2 dark:text-white"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="text-3xl text-zinc-800 mb-8 dark:text-white">Login</h3>
            <label className="text-sm text-zinc-500 dark:text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="w-full py-2 px-3 rounded-md mb-4 bg-zinc-200 border border-zinc-200 outline-none my-2"
              placeholder="email"
              name="email"
              id="email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <p className="text-sm text-red-500">
                This field is required
              </p>
            )}
            
            <label className="text-sm text-zinc-500 dark:text-white" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="w-full py-2 px-3 rounded-md mb-2 bg-zinc-200 border border-zinc-200 outline-none my-2 "
              placeholder="password"
              name="password"
              id="password"
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
                Login
              </button>
              <p className="text-zinc-500 text-sm mt-2 dark:text-white">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline hover:text-blue-600 cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
