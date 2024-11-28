import React, { useState, useEffect } from "react";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "../features/api/apiSlices/userApiSlice.js";
import { setCredentials } from "../features/authenticate/authSlice";
import { updateLoader } from "../features/loader/loaderSlice";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import patternImage from "../images/pattern.png";
import logoImage from "../images/logo.png"; // Import your logo image
import validateForm from "../utils/validateForm";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [countdown, setCountdown] = useState(
    parseInt(localStorage.getItem("otpCountdown")) || 0
  );
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: Login, 2: OTP Verification
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const validationSchema = object({
    email: string().required("Email is required.").email("Invalid Email."),
    password: string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long."),
  });

  const { email, password } = formData;
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [sendOtp] = useSendOtpMutation();
  const [verifyOtp, { isLoading: verifyOtpLoading }] = useVerifyOtpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    validateForm(e.target.name, e.target.value, validationSchema, setErrors);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoader(40));
      const res = await login(formData).unwrap();
      dispatch(updateLoader(60));

      await dispatch(setCredentials(res.token));
      toast.success(res.message || "Logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      if (error?.data?.error === "Invalid user credentials!") {
        toast.error("Invalid email or password. Please try again.");
      } else if (error?.data?.user?.verified === false) {
        await sendOtp({ email });
        dispatch(updateLoader(60));
        setCountdown(60);
        localStorage.setItem("otpCountdown", "60");
        setStep(2);
        toast.error("Please verify your email to proceed.");
      } else {
        toast.error("Unexpected Internal Server Error!");
      }
    } finally {
      dispatch(updateLoader(100));
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoader(40));
      const otpRes = await verifyOtp({ email, otp }).unwrap();
      dispatch(updateLoader(70));
      toast.success("Email verified successfully. Please log in to proceed!");
      setStep(1);
    } catch (error) {
      toast.error("Unexpected Internal Server Error!");
    } finally {
      dispatch(updateLoader(100));
    }
  };

  const resendOtp = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoader(40));
      await sendOtp({ email });
      dispatch(updateLoader(70));
      toast.success("OTP sent successfully. Please check your email!");
    } catch (error) {
      toast.error("Unexpected Internal Server Error!");
    } finally {
      dispatch(updateLoader(100));
      setCountdown(60);
      localStorage.setItem("otpCountdown", "60");
    }
  };

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

  const hasErrors = Object.values(errors).some((error) => !!error);

  return (
    <section className="flex gap-4 bg-white">
      <div className="w-full lg:w-3/5 mt-16">
        <div className="text-center">
          <img
            src={logoImage} // Add your logo image
            alt="Logo"
            className="mx-auto mb-4 w-32" // Adjust the size and margin as needed
          />
          <Typography variant="h2" className="font-bold mb-4 text-green-600">
            {step === 1 ? "Welcome Back!" : "Email Verification"}
          </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            {step === 1
              ? "Access personalized tools for a healthier environment."
              : "Enter the OTP sent to your email to proceed."}
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={step === 1 ? handleSubmit : handleOtpSubmit}
        >
          {step === 1 ? (
            <>
              <div className="mb-4 flex flex-col gap-6">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Your email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  error={Boolean(errors.email)}
                />
                {errors.email && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.email}
                  </Typography>
                )}
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  error={Boolean(errors.password)}
                />
                {errors.password && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.password}
                  </Typography>
                )}
              </div>
              <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                label={
                  <Typography variant="small" color="gray" className="font-medium">
                    I agree to the&nbsp;
                    <a 
                      href="/terms" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-600 underline hover:text-green-800"
                    >
                      Terms and Conditions
                    </a>

                  </Typography>
                }
              />
              <Button
                className="mt-6 bg-green-600"
                fullWidth
                type="submit"
                disabled={!email || !password || hasErrors || !isChecked}
                loading={loginLoading}
              >
                Sign In
              </Button>
              <div className="mt-4 text-center">
                <Typography variant="small" color="blue-gray">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-green-600 hover:text-green-800">
                    Sign Up
                  </Link>
                </Typography>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 flex flex-col gap-6">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Enter OTP
                </Typography>
                <Input size="lg" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
              </div>
              <Button
                className="mt-6 bg-green-600"
                fullWidth
                type="submit"
                disabled={!otp}
                loading={verifyOtpLoading}
              >
                Verify OTP
              </Button>
              <Button className="mt-4 bg-gray-300" fullWidth onClick={resendOtp} disabled={countdown > 0}>
                Resend OTP {countdown > 0 && `(${countdown}s)`}
              </Button>
            </>
          )}
        </form>
      </div>
      <div className="hidden lg:w-2/5 relative lg:flex items-center justify-center rounded-2xl overflow-hidden">
        <img src={patternImage} alt="Earth" className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-green-800 opacity-70" />
        <div className="absolute inset-0 flex justify-center items-center text-center text-white px-8">
          <div>
            <Typography variant="h4" className="font-bold">
              Make the Earth Better
            </Typography>
            <Typography className="mt-4 font-semibold text-lg">
              Join a global initiative for a sustainable future.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
