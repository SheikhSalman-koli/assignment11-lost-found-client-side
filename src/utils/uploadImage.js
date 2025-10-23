import axios from "axios";


export const uploadPhoto = async (image) => {
  const formData = new FormData(); 
  formData.append('file', image); 
  formData.append('upload_preset', 'salman');

  const cloudName = 'dobtto17a';

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    formData
  );

  return response?.data?.secure_url
};