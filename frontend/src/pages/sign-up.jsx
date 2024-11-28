import React, { useState, useEffect } from "react";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useRegisterMutation, useSendOtpMutation, useVerifyOtpMutation } from "../features/api/apiSlices/userApiSlice.js";
import { setCredentials } from "../features/authenticate/authSlice";
import { updateLoader } from "../features/loader/loaderSlice";
import validateForm from "../utils/validateForm.js";
import patternImage from "../images/pattern.png";
import { Checkbox, Button, Input, Typography, Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; // Add your logo image path

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "", // Add country to form data
  });
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [step, setStep] = useState(1); // 1: registration, 2: OTP verification
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const validationSchema = object({
    username: string()
      .required("Username is required.")
      .min(3, "Username must be at least 3 characters long.")
      .max(20, "Username should not be more than 20 characters."),
    email: string().required("Email is required.").email("Invalid Email."),
    password: string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long."),
    country: string().required("Country is required."), // Add country validation
  });

  const { username, email, password, country } = formData;

  const [register, { isLoading: registerLoading }] = useRegisterMutation();
  const [sendOtp, { isLoading: sendOtpLoading }] = useSendOtpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e, name = null) => {
    const fieldName = name || e.target.name; // Use provided name or fallback to event's target name
    const fieldValue = name ? e : e.target.value; // If name is provided, `e` is value
  
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  
    validateForm(fieldName, fieldValue, validationSchema, setErrors);
  };
  

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
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

  const [verifyOtp, { isLoading: verifyOtpLoading }] = useVerifyOtpMutation();
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoader(40));
      const res = await verifyOtp({ email, otp }).unwrap();
      console.log(res);
      toast.success(res.message || "OTP verified successfully!");
      navigate("/signin"); // Redirect after successful verification
    } catch (error) {
      toast.error(error?.data?.message || "OTP Verification failed.");
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

  // Basic country options for the select dropdown
  const countryOptions = [
    { value: "IN", label: "India" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    { value: "AU", label: "Australia" },
    // Add more countries here
  ];

  return (
    <>
      <section className="flex gap-4 bg-white min-h-screen">
        <div className="w-full lg:w-3/5 mt-16 px-4">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="mx-auto w-24" />
          </div>
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4 text-green-600">
              {step === 1 ? "Create an Account" : "Email Verification"}
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
              {step === 1
                ? "Join our platform and make a positive impact on the environment."
                : "Enter the OTP sent to your email to proceed."}
            </Typography>
          </div>
          <form
            className="mt-8 mb-2 mx-auto w-full max-w-md"
            onSubmit={step === 1 ? handleSubmit : handleOtpSubmit}
          >
            {step === 1 ? (
              <>
                <div className="mb-4 flex flex-col gap-6">
                  {/* Form Fields */}
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Your username
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Your username"
                    name="username"
                    value={username}
                    onChange={handleOnChange}
                    error={Boolean(errors.username)}
                  />
                  {errors.username && (
                    <Typography variant="small" color="red" className="mt-1">
                      {errors.username}
                    </Typography>
                  )}

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

                  {/* Country Select */}
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Select your country
                  </Typography>
                  <Select
                    label="Select Country"
                    name="country"
                    value={country}
                    onChange={(value) => handleOnChange(value, "country")}
                    error={Boolean(errors.country)}
                  >
                    {countryOptions.map((option) => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>

                  {errors.country && (
                    <Typography variant="small" color="red" className="mt-1">
                      {errors.country}
                    </Typography>
                  )}
                </div>
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  label={
                    <Typography variant="small" color="gray" className="font-medium">
                      I agree to the&nbsp;
                      <Link to="/terms" className="text-green-500 hover:text-green-700">
                        Terms & Conditions
                      </Link>
                    </Typography>
                  }
                />
                <div className="mt-6">
                  <Button
                    fullWidth
                    color="green"
                    size="lg"
                    type="submit"
                    disabled={hasErrors || registerLoading || !isChecked}
                  >
                    {registerLoading ? "Signing up..." : "Sign up"}
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-4 flex flex-col gap-6">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Enter OTP
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter OTP"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    size="sm"
                    color="green"
                    onClick={resendOtp}
                    disabled={countdown > 0}
                  >
                    Resend OTP ({countdown}s)
                  </Button>
                  <Button
                    fullWidth
                    color="green"
                    size="lg"
                    type="submit"
                    onClick={handleOtpSubmit}
                    disabled={!otp || sendOtpLoading}
                  >
                    {sendOtpLoading ? "Verifying..." : "Verify OTP"}
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>

        {/* Right-side Pattern Image Section */}
        <div className="hidden lg:block lg:w-2/5 relative rounded-2xl overflow-hidden">
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
    </>
  );
}
