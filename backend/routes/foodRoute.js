import express from "express";
import {
  addFood,
  listFoods,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

///////////////////////////////////////
// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });

/////////////////////////////////////////
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFoods);
foodRouter.post("/remove", removeFood);

export default foodRouter;
