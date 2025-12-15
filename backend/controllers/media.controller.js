// import cloudinary from "../config/cloudinary.js";
// import streamifier from "streamifier";
// export const uploadMedia = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     const streamUpload = () => {
//       return new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           {
//             folder: "cms-media",
//             resource_type: "auto",
//           },
//           (error, result) => {
//             if (result) resolve(result);
//             else reject(error);
//           }
//         );

//         streamifier.createReadStream(req.file.buffer).pipe(stream);
//       });
//     };

//     const result = await streamUpload();

//     return res.status(201).json({
//       public_id: result.public_id,
//       url: result.secure_url,
//       format: result.format,
//       size: result.bytes,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await streamUpload(req.file.buffer);

    return res.status(201).json({
      public_id: result.public_id,
      url: result.secure_url,
      format: result.format,
      size: result.bytes,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMedia = async (req, res) => {
  try {
    const { publicId } = req.params;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    await cloudinary.uploader.destroy(publicId, {
      resource_type: "image",
    });

    const result = await streamUpload(req.file.buffer);

    return res.status(200).json({
      message: "Media updated successfully",
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMedia = async (req, res) => {
  try {
    const { publicId } = req.params;

    await cloudinary.uploader.destroy(publicId, {
      resource_type: "image",
    });

    return res.status(200).json({
      message: "Media deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "cms-media",
        resource_type: "auto",
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};
