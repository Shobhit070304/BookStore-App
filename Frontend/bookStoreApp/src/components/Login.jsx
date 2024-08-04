import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box py-8 px-6 text-black">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>

            <h3 className="text-3xl text-zinc-800 mb-4">Login</h3>
            <label className="text-sm text-zinc-500" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="w-full py-2 px-3 rounded-md mb-2 bg-zinc-200 border border-zinc-200 outline-none my-2"
              placeholder="email"
              name="email"
              id="email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            <br />
            <label className="text-sm text-zinc-500" htmlFor="password">
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
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            <div className="w-full flex flex-col items-center">
              <button className="w-full  py-2 rounded-md text-white bg-blue-600 my-4">
                Login
              </button>
              <p className="text-zinc-500 text-sm mt-2">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline hover:text-blue-800 cursor-pointer"
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
