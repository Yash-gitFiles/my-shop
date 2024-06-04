import { Button, Select, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <div className="grid place-items-center h-[100vh]" data-aos="fade-down">
      <div className="max-w-[350px] w-full bg-[#E7E3E3] p-4 rounded-3xl">
        <p className="text-2xl mb-2">We will response 24 hours</p>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="flex gap-2">
            <p> Which category issue </p>
            <span className="text-red-600">*</span>
          </div>

          <Select {...register("category")}>
            <option value="shoes">shoes</option>
            <option value="watch">watch</option>
            <option value="beautyProduct">Beauty Product</option>
          </Select>
          <div>
            <div className="flex gap-2">
              <p>Share Your Feedback</p>
              <span className="text-red-600">*</span>
            </div>
            <TextInput
              type="text"
              {...register("feedback", {
                required: {
                  value: true,
                  message: "Please share your feedback",
                },
                minLength: {
                  value: 16,
                  message: "minimum 16 charecter is required",
                },
                validate: {
                  trim: (value) => {
                    let length = value.trim();
                    if (length > 16) {
                      return true;
                    }
                    return "minimum 16 charecter is required";
                  },
                },
              })}
            />
            {errors.feedback && (
              <p className="text-red-700">{errors.feedback.message}</p>
            )}
          </div>
          <Button type="submit" color="dark">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
