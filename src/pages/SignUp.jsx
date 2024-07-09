import React, { useState } from "react";
import SignImage from "../assets/registerBG.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [password, setPassword] = useState("");

  let [emailerr, setEmailerr] = useState("");
  let [fullNameerr, setFullNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");

  let [passwordshow, setPasswordshow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameerr("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is required");
    }
    if (!fullName) {
      setFullNameerr("Name is required");
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
            Get started with easily register
          </h1>
          <p className="text-[20px] font-normal text-black opacity-50 mt-[13px]">
            Free register and you can enjoy it
          </p>

          {/* ===================== Input Area ======================= */}

          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
              type="mail"
              placeholder="Enter Your Email"
              value={email}
            />
            {emailerr && (
              <p className="text-red-500 text-sm font-normal">{emailerr}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
              Full name
            </label>
            <input
              onChange={handleFullName}
              className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
              type="text"
              placeholder="Enter Your Full name"
              value={fullName}
            />
            {fullNameerr && (
              <p className="text-red-500 text-sm font-normal">{fullNameerr}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label className="text-sm font-semibold text-secondary absolute top-[-10px] left-[50px] bg-white px-4">
              Password
            </label>
            <input
              onChange={handlePassword}
              className=" w-full h-full border border-secondary/50 rounded-lg pl-[62px]"
              type={passwordshow? 'text' : 'password'}
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
            className="bg-primary w-[368px] py-[20px] text-xl font-semibold text-white rounded-[86px] mt-[50px]"
          >
            Sign up
          </button>
          <p className="text-sm text-secondary text-center w-[368px] mt-[35px]">
            Already have an account ?{" "}
            <Link className="text-[#EA6C00] font-bold">Sign In</Link>
          </p>
        </div>
      </div>
      <div className="w-2/4 h-full">
        <img
          className="ml-auto w-full h-screen object-cover"
          src={SignImage}
          alt="SignUp Image"
        />
      </div>
    </div>
  );
};

export default SignUp;
