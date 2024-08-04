import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="min-w-screen md:w-1/3 p-6 py-6 border border-zinc-200 rounded-md ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-semibold mb-8">Contact Us</h1>
          <label className="text-sm text-zinc-500 ">Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="w-full py-2 px-3 outline-none border rounded-md mb-3"
            {...register("name", { required: true })}
          />
          
          {errors.name && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <br />
          <label className="text-sm text-zinc-500 ">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="w-full py-2 px-3 outline-none border rounded-md mb-3"
            {...register("email", { required: true })}
          />
          
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <br />

          <label className="text-sm text-zinc-500 ">Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="message"
            className="w-full py-2 px-3 rounded-md border outline-none resize-none"
            {...register("message", { required: true })}
          />
          <br />
          {errors.message && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
          <br />
          <button
            type="submit"
            className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
