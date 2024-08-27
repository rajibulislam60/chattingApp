import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
