import React, { useState } from "react";
import SignImage from "../assets/signIN.jpg";
import LoginImage from "../assets/loginGoogle.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { signinUserInfo } from "../slices/userSlice";
import { getDatabase, ref, set } from "firebase/database";

const SignIn = () => {
  const db = getDatabase();
  const auth = getAuth();
  let navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  let dispatch = useDispatch();

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
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(signinUserInfo(user));
          localStorage.setItem("user", JSON.stringify(user))
          navigate('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          if (error.code.includes("auth/invalid-credential")) {
            alert("Invalid-credential");
          }

          // const errorMessage = error.message;
        });
    }
  };

  let handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        set(ref(db, "users/" + user.user.uid), {
          username: user.user.displayName,
          email: user.user.email,
          profile_picture: user.user.photoURL,
          date: `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
        }).then(() => {
          setTimeout(() => {
            navigate("/");
          });
        });

        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // const user = result.user;
      })
      .catch((error) => {
        console.log(error);

        // const errorCode = error.code;
        // const errorMessage = error.message;

        // const email = error.customData.email;

        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center">
        <div className="mr-[69px]">
          <h1 className="text-[34px] font-bold text-secondary">
            Login to your account!
          </h1>
          <button onClick={handleGoogleLogin} className="mt-[30px]">
            <img src={LoginImage} alt="Login by google" />
          </button>
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
