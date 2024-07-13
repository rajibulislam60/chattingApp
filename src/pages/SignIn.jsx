import React, { useState } from "react";
import SignImage from "../assets/signIN.jpg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");

  let [passwordshow, setPasswordshow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("Invalid Email");
    }
    if (!password) {
      setPassworderr("Password is required");
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center">
        <div className="mr-[69px]">
          <h1 className="text-[34px] font-bold text-secondary">
            Login to your account!
          </h1>

          {/* ===================== Input Area ======================= */}

          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary absolute top-[-10px]">
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className=" w-full h-full border-b border-secondary/50"
              type="mail"
              placeholder="Enter Your Email"
              value={email}
            />
            {emailerr && (
              <p className="text-red-500 text-sm font-normal">{emailerr}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary absolute top-[-10px]">
              Password
            </label>
            <input
              onChange={handlePassword}
              className=" w-full h-full border-b border-secondary/50"
              type={passwordshow ? "text" : "password"}
              placeholder="Enter Your Password"
              value={password}
            />
            {passwordshow ? (
              <FaEye
                onClick={() => setPasswordshow(false)}
                className="text-2xl absolute top-2/4 right-5 translate-y-[-50%] cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordshow(true)}
                className="text-2xl absolute top-2/4 right-5 translate-y-[-50%] cursor-pointer"
              />
            )}

            {passworderr && (
              <p className="text-red-500 text-sm font-normal">{passworderr}</p>
            )}
          </div>

          {/* =================== Button Area ======================= */}

          <button
            onClick={handleSubmit}
            className="bg-primary w-[368px] py-[20px] text-xl font-semibold text-white rounded-[8px] mt-[50px]"
          >
            Login to Continue
          </button>
          <p className="text-sm text-secondary text-center w-[368px] mt-[35px]">
            Already have an account ?{" "}
            <Link to="/signup" className="text-[#EA6C00] font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="w-2/4 h-full">
        <img
          className="ml-auto w-full h-screen object-cover"
          src={SignImage}
          alt="SignIn Image"
        />
      </div>
    </div>
  );
};

export default SignIn;
