"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
interface SingUpFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmpassword: string;
}
const SingUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SingUpFormData>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<SingUpFormData> = async (data) => {
    setLoading(true);
    console.log("Form Data:", data);

    setTimeout(() => {
      setLoading(false);
      toast.success("Sing up successful!");
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
        placeholder="Name"
      />
      {errors.name && (
        <span className="text-sm text-red-500">name is required</span>
      )}
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
        {...register("phone")}
        className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
        type="text"
        placeholder="Phone number"
      />
      <input
        {...register("password", { required: true })}
        className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
        type="text"
        placeholder="Password"
      />
      {errors.password && (
        <span className="text-sm text-red-500">Password is required</span>
      )}
      <input
        {...register("confirmpassword", { required: true })}
        className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
        type="text"
        placeholder="Confirm Password"
      />
      {errors.confirmpassword && (
        <span className="text-sm text-red-500">
          Confirm Password is required
        </span>
      )}
      <button
        type="submit"
        disabled={loading}
        className="px-2 py-2 bg-primary text-white cursor-pointer hover:bg-secondary duration-300 text-sm rounded outline-none"
      >
        {loading && <span className="animate-spin  rounded-full"></span>}
        {loading ? "register..." : "Register"}
      </button>

      <div>
        <p className="text-center text-sm py-4 text-[#474646]">
          If you have already account{" "}
          <Link href="/signIn">
            <span className="font-medium text-primary cursor-pointer">
              please Log In
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SingUpForm;
