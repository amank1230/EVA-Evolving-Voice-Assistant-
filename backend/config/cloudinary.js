import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (filePath) => {
  const CLOUDINARY_CLOUD = "dnkxzwytb";
  const CLOUDINARY_API_K = "798721263881726";
  const CLOUDINARY_API_SEC = "T1HcLk7fSUm8upQrFo-ACLtboPQ";

  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD,
    api_key: CLOUDINARY_API_K,
    api_secret: CLOUDINARY_API_SEC,
  });

  try {
    const uploadResult = await cloudinary.uploader.upload(filePath);//image ki path dega
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath); // cleanup
    return uploadResult.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error.message);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath); // cleanup
    return null; // instead of res.status (res not available here)
  }
};

export default uploadOnCloudinary;
