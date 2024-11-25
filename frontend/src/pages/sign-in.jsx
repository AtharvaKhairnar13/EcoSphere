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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoader(40));
      const res = await login(formData).unwrap();
      dispatch(updateLoader(60));

      console.log("Login successful, token:", res.token);
      await dispatch(setCredentials(res.token));
      toast.success(res.message || "Logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error?.data?.user?.verified === false) {
        await sendOtp({ email });
        dispatch(updateLoader(60));
        setCountdown(60);
        localStorage.setItem("otpCountdown", "60");
        setStep(2);
        toast.error(error?.data?.error || "Please verify your email to proceed.");
        return;
      }

      toast.error(error?.data?.error || "Unexpected Internal Server Error!");
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
      toast.success(
        otpRes.message ||
          "Email verified successfully. Please log in to proceed!"
      );
      setStep(1);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.error || "Unexpected Internal Server Error!");
    } finally {
      dispatch(updateLoader(100));
    }
  };

  const resendOtp = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoader(40));
      const otpRes = await sendOtp({ email }).unwrap();
      dispatch(updateLoader(70));
      toast.success(
        otpRes.message || "OTP sent successfully. Please check your email!"
      );
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.error || "Unexpected Internal Server Error!");
    } finally {
      dispatch(updateLoader(100));
      setCountdown(60);
      localStorage.setItem("otpCountdown", "60");
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
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            {step === 1 ? "Sign In" : "Verify your Email"}
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            {step === 1
              ? "Enter your email and password to Sign In."
              : "Please enter the OTP sent to your email."}
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
                  Your email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  error={Boolean(errors.email)} // Pass a boolean value to the error prop
                />
                {errors.email && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.email}
                  </Typography>
                )}
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  error={Boolean(errors.password)} // Pass a boolean value to the error prop
                />
                {errors.password && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.password}
                  </Typography>
                )}
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-start font-medium"
                  >
                    I agree to the&nbsp;
                    <Link
                      to="/terms"
                      className="font-normal text-black transition-colors hover:text-gray-900 underline"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button
                className="mt-6"
                fullWidth
                type="submit"
                disabled={!email || !password || hasErrors}
                loading={loginLoading}
              >
                Sign In
              </Button>
            </>
          ) : (
            <>
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-medium"
                >
                  Enter OTP
                </Typography>
                <Input
                  size="lg"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  error={errors.otp}
                />
              </div>
              <Button
                className="mt-6"
                fullWidth
                type="submit"
                disabled={!otp}
                loading={verifyOtpLoading}
              >
                Verify OTP
              </Button>
              <Button
                className="mt-6"
                fullWidth
                onClick={resendOtp}
                disabled={countdown > 0}
              >
                Resend OTP {countdown > 0 && `(${countdown}s)`}
              </Button>
            </>
          )}
          {step === 1 && (
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
                  <g clipPath="url(#clip0_1156_824)">
                    <path
                      d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M8.66008 15.6004C10.8128 15.6004 12.6028 14.8897 13.9638 13.5755L11.3858 11.5765C10.6658 12.0639 9.71825 12.3504 8.66008 12.3504C6.57908 12.3504 4.83191 10.9856 4.19333 9.07471H1.5238V11.1233C2.88199 13.7064 5.60324 15.6004 8.66008 15.6004Z"
                      fill="#34A853"
                    />
                    <path
                      d="M4.18848 9.07471C3.94527 8.08119 3.94527 7.01694 4.18848 6.02342V3.97485H1.52395C0.771702 5.52085 0.771702 7.57727 1.52395 9.12327L4.18848 9.07471Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M8.66008 3.84925C9.76457 3.83257 10.8236 4.25697 11.5857 5.02506L14.0157 2.59506C12.5946 1.25372 10.6518 0.602203 8.66008 0.599232C5.60324 0.599232 2.88199 2.49323 1.5238 5.07634L4.18832 7.12491C4.83191 5.21056 6.57908 3.84925 8.66008 3.84925Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1156_824">
                      <rect
                        width="15.6"
                        height="15.6"
                        fill="white"
                        transform="translate(0.660156 0.599976)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </Button>
            </div>
          )}
        </form>
      </div>
      <div className="hidden lg:w-2/5 relative lg:flex items-center justify-center rounded-2xl overflow-hidden">
        <img
          src={patternImage}
          alt="Pattern"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-75" />
        <div className="absolute inset-0 bg-pattern flex justify-center items-center text-center text-white p-8">
          <div className="relative p-8">
            <Typography variant="h4" className="font-bold">
              Discover the World of Opportunity
            </Typography>
            <Typography className="font-semibold">
              Join us and explore endless possibilities. Your future is here.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
