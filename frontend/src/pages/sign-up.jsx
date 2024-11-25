import React, { useState, useEffect } from "react";
import { object, string } from "yup";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  useRegisterMutation,
  useSendOtpMutation,
} from "../features/api/apiSlices/userApiSlice.js";
import { setCredentials } from "../features/authenticate/authSlice";
import { updateLoader } from "../features/loader/loaderSlice";
import validateForm from '../utils/validateForm.js';  
import patternImage from "../images/pattern.png";
import OtpForm from "../components/Form/OtpForm.jsx";
import SubmitButton from "../components/SubmitButton.jsx";
import { Checkbox, Button, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [step, setStep] = useState(1); // 1: registration, 2: OTP verification

  const validationSchema = object({
    username: string()
      .required("Username is required.")
      .min(3, "Username must be at least 3 characters long.")
      .max(20, "Username should not be more than 20 characters."),
    email: string().required("Email is required.").email("Invalid Email."),
    password: string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long."),
  });

  const { username, email, password } = formData;

  const [register, { isLoading: registerLoading }] = useRegisterMutation();
  const [sendOtp, { isLoading: sendOtpLoading }] = useSendOtpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    validateForm(e.target.name, e.target.value, validationSchema, setErrors);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      dispatch(updateLoader(40));
      const res = await register(formData).unwrap();
      await dispatch(setCredentials(res.user));
      await sendOtp({ email });
      setCountdown(60);
      localStorage.setItem("otpCountdown", "60");

      dispatch(updateLoader(60));
      toast.success("OTP sent successfully. Please check your email!");

      setStep(2);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.error || "Unexpected Internal Server Error!");
    } finally {
      dispatch(updateLoader(100));
    }
  };

  const handleOtpSubmit = async (e) => {
    try {
      e.preventDefault();

      dispatch(updateLoader(40));
      const otpRes = await sendOtp({ email, otp }).unwrap();

      dispatch(updateLoader(60));
      await dispatch(setCredentials(otpRes.user));
      toast.success(otpRes.message || "Email has been verified successfully!");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.error || "Unexpected Internal Server Error!");
    } finally {
      dispatch(updateLoader(100));
    }
  };

  const resendOtp = async (e) => {
    try {
      e.preventDefault();

      dispatch(updateLoader(40));
      const otpRes = await sendOtp({ email }).unwrap();

      dispatch(updateLoader(70));
      toast.success(
        otpRes.message || "OTP sent successfully. Please check your email!"
      );
      setCountdown(60);
      localStorage.setItem("otpCountdown", "60");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.error || "Unexpected Internal Server Error!");
    } finally {
      dispatch(updateLoader(100));
    }
  };

  const hasErrors = Object.values(errors).some((error) => !!error);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
        localStorage.setItem("otpCountdown", (countdown - 1).toString());
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src={patternImage}
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Join Us Today
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email and password to register.
          </Typography>
        </div>

        <form
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={step === 1 ? handleSubmit : handleOtpSubmit}
        >
          {step === 1 ? (
            <>
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
                  Your username
                </Typography>
                <Input
                size="lg"
                placeholder="Username"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                value={username}
                name="username"
                onChange={handleOnChange}
                error={!!errors.username} // Ensure it's a boolean
                helperText={errors.username} // Show the error message as helper text
              />

              </div>

              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
                  Your email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  value={email}
                  name="email"
                  onChange={handleOnChange}
                  error={!!errors.email} // Ensure it's a boolean
                  helperText={errors.email} // Show the error message as helper text
                />
              </div>

              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
                  Your password
                </Typography>
                <Input
                  size="lg"
                  type="password"
                  placeholder="Password"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  value={password}
                  name="password"
                  onChange={handleOnChange}
                  error={!!errors.password} // Ensure it's a boolean
                  helperText={errors.password} // Show the error message as helper text
                />
              </div>

              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-start font-medium"
                  >
                    I agree the&nbsp;
                    <a
                      href="#"
                      className="font-normal text-black transition-colors hover:text-gray-900 underline"
                    >
                      Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <SubmitButton
                isLoading={registerLoading}
                handleSubmit={handleSubmit}
                isDisabled={!email || !password || !username || hasErrors}
              />
            </>
          ) : (
            <OtpForm
              otp={otp}
              setOtp={setOtp}
              email={email}
              handleOtpSubmit={handleOtpSubmit}
              resendOtp={resendOtp}
              countdown={countdown}
              verifyOtpLoading={sendOtpLoading}
            />
          )}

          <div className="space-y-4 mt-8">
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center shadow-md"
              fullWidth
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0135V13.2865H13.4579C15.1546 11.9008 16.3442 9.4776 16.3442 8.18429Z"
                  fill="#4285F4"
                />
                <path
                  d="M8.66016 4.55872C9.35639 4.55872 9.97653 4.89504 10.3188 5.35921L12.4762 4.07791L12.4762 4.07791C11.9088 3.51527 10.7796 3.09527 9.51477 3.09527C7.5135 3.09527 5.98866 4.13709 5.14455 5.55742L6.38233 6.83972C6.85985 5.86339 7.74207 5.17756 8.66016 5.17756Z"
                  fill="#34A853"
                />
                <path
                  d="M5.14456 5.55743C5.14456 4.66279 5.41431 3.85606 5.88947 3.18248L4.64035 2.30517L3.5103 2.30516L3.50995 3.54958C3.50995 4.95063 4.18662 5.67077 5.14456 5.67077L5.14456 5.55743Z"
                  fill="#FBBC05"
                />
              </svg>
              Sign Up With Google
            </Button>
          </div>

          <p className="mt-8 text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-blue-600">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
