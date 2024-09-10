import React, { createRef, useState } from "react";
import ProfileImage from "../assets/profile.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { ImExit } from "react-icons/im";
import { MdCameraAlt } from "react-icons/md";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadString,
} from "firebase/storage";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { signinUserInfo } from "../slices/userSlice";
import { update, ref as dref, getDatabase } from "firebase/database";

const Sidebar = () => {
  const auth = getAuth();
  const db = getDatabase();
  let dispatch = useDispatch();
  let data = useSelector((state) => state.userInfo.value);
  const storage = getStorage();
  let [imageModal, setImageModal] = useState(false);
  let [imageFile, setImageFile] = useState(null);

  // ------------------react cropper work---------------
  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();

  // ---------------image upload in file-----------------
  let handleImageFile = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  let handleSave = () => {
    const storageRef = ref(storage, "some-child");
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const message4 = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          })
            .then(() => {
              dispatch(signinUserInfo(auth.currentUser));
              update(dref(db, "users/" + data.uid), {
                image: downloadURL
              });
            })
            .then(() => {
              setImageModal(false);
              setCropData(" ");
              setImage(" ");
            });
        });
      });
    }
  };

  return (
    <div className=" h-screen px-8 py-9 ">
      <div className="w-[186px] h-full bg-primary rounded-[20px] text-center">
        <div className="mx-auto pt-9">
          <div className="w-[100px] h-[100px] overflow-hidden mx-auto rounded-full group relative ">
            <img
              className="w-full h-full"
              src={data && data.photoURL}
              alt="profile Image"
            />
            <div
              onClick={() => setImageModal(true)}
              className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 cursor-pointer absolute top-0 left-0 flex justify-center items-center"
            >
              <MdCameraAlt className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-white text-xl font-bold font-nunito mt-3">
            {data && data.displayName}
          </h2>
        </div>
        <div className="w-full h-[88px] relative mt-[78px] ">
          <div className="w-[161px] h-[88px] bg-white ml-auto flex items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <IoHomeOutline className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-primary" />
        </div>
        <div className="w-full h-[88px] relative mt-[57px] ">
          <div className="hidden w-[161px] h-[88px] bg-white ml-auto items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <AiFillMessage className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-slate-200" />
        </div>
        <div className="w-full h-[88px] relative mt-[57px] ">
          <div className="hidden w-[161px] h-[88px] bg-white ml-auto items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <FaRegBell className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-slate-200" />
        </div>
        <div className="w-full h-[88px] relative mt-[57px] ">
          <div className="hidden w-[161px] h-[88px] bg-white ml-auto items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <GoGear className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-slate-200" />
        </div>
        <div className="w-full h-[88px] relative mt-[187px] ">
          <div className="hidden w-[161px] h-[88px] bg-white ml-auto items-center rounded-s-[20px] after:w-[8px] after:h-full after:top-0 after:right-0 after:absolute after:bg-primary after:rounded-s-[20px] after:shadow-red-900 after:shadow-2xl"></div>
          <ImExit className="text-[46px] w-full mx-auto absolute top-2/4 translate-y-[-50%] text-white" />
        </div>
      </div>
      {/* ----------------image upload handling area---------------------- */}
      {imageModal && (
        <div className="w-full h-screen bg-black/50 absolute top-0 left-0 z-50 flex justify-center items-center">
          <div className="w-[500px] bg-white rounded-md p-6">
            <h2 className="font-nunito text-2xl  font-semibold">
              Upload Your Image
            </h2>
            <input
              onChange={handleImageFile}
              className="font-nunito text-xl  font-semibold mt-[20px]"
              type="file"
            />
            {image && (
              <Cropper
                ref={cropperRef}
                style={{ height: 400, width: "100%" }}
                zoomTo={0.5}
                initialAspectRatio={1}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
              />
            )}
            {/* -------------------button area and loader--------------------- */}

            <button
              onClick={handleSave}
              className="bg-primary py-2 px-3 text-xl font-semibold text-white rounded-[8px] mt-[50px]"
            >
              Save
            </button>

            <button
              onClick={() => setImageModal(false)}
              className="bg-red-500 ml-2 py-2 px-3 text-xl font-semibold text-white rounded-[8px] mt-[50px]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
