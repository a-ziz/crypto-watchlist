import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import validator from "validator";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signUp } = UserAuth();

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email");
    }
  };

  const validatePassword = (e) => {
    var password = e.target.value;

    if (password.length > 5) {
      setPasswordError("");
    } else {
      setPasswordError("Your password should be at least 6 characters.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);
      navigate("/signin");
    } catch (e) {
      setError(e.message);
      // console.error(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {error && <p className="text-red">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-xl shadow-lg">
              <input
                onChange={(e) => {
                  validateEmail(e);
                  setEmail(e.target.value);
                }}
                className="w-full p-2 bg-primary border border-input rounded-xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {emailError}
            </span>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-xl shadow-lg">
              <input
                onChange={(e) => {
                  validatePassword(e);
                  setPassword(e.target.value);
                }}
                className="w-full p-2 bg-primary border border-input rounded-xl"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {passwordError}
            </span>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-xl shadow-lg">
            Sign Up
          </button>
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-accent">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
