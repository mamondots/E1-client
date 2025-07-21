"use client";
import Link from "next/link";
import React, { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ForgetPassword from "./ForgetPassword";
interface SingInFormData {
  email: string;
  password: string;
}
const SingInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SingInFormData>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<SingInFormData> = async (data) => {
    setLoading(true);
    console.log("Form Data:", data);

    setTimeout(() => {
      setLoading(false);
      toast.success("Login successful!");
      router.push("/");
      reset();
    }, 2000);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 flex flex-col gap-2"
    >
      <input
        {...register("email", { required: true })}
        className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
        type="text"
        placeholder="Email"
      />

      {errors.email && (
        <span className="text-sm text-red-500">email is required</span>
      )}
      <input
        {...register("password", { required: true })}
        className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
        type="text"
        placeholder="Password"
      />

      {errors.password && (
        <span className="text-sm text-red-500">password is required</span>
      )}
      <button
        type="submit"
        disabled={loading}
        className="px-2 py-2 bg-primary text-white cursor-pointer hover:bg-secondary duration-300 text-sm rounded outline-none"
      >
        {loading && <span className="animate-spin  rounded-full"></span>}
        {loading ? "sing in..." : "Sing In"}
      </button>

      <div>
        <p className="text-sm text-[#474646] cursor-pointer duration-300 hover:text-primary">
          <ForgetPassword />
        </p>

        <p className="text-center text-sm py-4 text-[#474646]">
          If you are new here{" "}
          <Link href="/signUp">
            <span className="font-medium text-primary cursor-pointer">
              create account first
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SingInForm;
