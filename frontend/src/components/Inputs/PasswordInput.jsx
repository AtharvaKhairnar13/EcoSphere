import React, { useState } from "react";
import { Input } from "@nextui-org/react";

const PasswordInput = ({
  value,
  onChange,
  errors,
  label,
  name,
  isInvalid,
  errorMessage,
  placeholder,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <Input
      type={isVisible ? "text" : "password"}
      label={label ? label : "Password"}
      name={name ? name : "password"}
      value={value}
      onChange={onChange}
      isInvalid={isInvalid ? isInvalid : !!errors?.password}
      errorMessage={errorMessage ? errorMessage : errors?.password}
      placeholder={placeholder ? placeholder : "Enter your password"}
      className="text-primary"
      classNames={{
        errorMessage: "text-error font-calSans",
      }}
    />
  );
};

export default PasswordInput;