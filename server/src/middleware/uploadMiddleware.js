import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename(req, file, cb) {
    const extension = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, extension).replace(/\s+/g, "-").toLowerCase();
    cb(null, `${baseName}-${Date.now()}${extension}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpg|jpeg|png|webp|mp4|mov|webm/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype.toLowerCase());

  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error("Only image and video uploads are allowed"));
  }
};

export const upload = multer({
  storage,
  fileFilter
});
