import { Button, Select, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

function ProcessToBuy() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="grid place-items-center h-[100vh]">
      <div className="max-w-[350px] w-full bg-[#E7E3E3] p-4 rounded-3xl">
        <p className="text-2xl mb-2">Order Delivered after 7 Days.</p>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex gap-2">
              <p>Delivery Address</p>
              <span className="text-red-700">*</span>
            </div>
            <TextInput
              placeholder="Enter your address"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
            />
            {errors.address && (
              <p className="text-red-700">{errors.address.message}</p>
            )}
          </div>
          <TextInput
            type="text"
            placeholder="your name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
            })}
          />
          {errors.name && <p className="text-red-700">{errors.name.message}</p>}
          <TextInput
            type="email"
            placeholder="your email"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your email",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}

          <TextInput
            type="number"
            placeholder="concat"
            {...register("contact", {
              required: {
                value: true,
                message: "Please enter your contact",
              },
              minLength: {
                value: 10,
                message: "Enter a valid number",
              },
              maxLength: {
                value: 10,
                message: "Enter a valid number",
              },
            })}
          />

          {errors.contact && (
            <p className="text-red-700">{errors.contact.message}</p>
          )}
          <p className="text-xl">Selected Payment Option</p>
          <Select {...register("paymentMode")}>
            <option value="cod">COD</option>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </Select>

          <Button type="submit" color="dark">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProcessToBuy;
