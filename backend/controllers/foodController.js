import FoodModel from "../models/foodModel.js";
import fs from "fs";

/////////////////////////////////////////////////////
// Add Food Item
const addFood = async (req, res) => {
  const image_filename = `${req.file.filename}`;

  const newFood = new FoodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await newFood.save();
    res.json({ success: true, message: "new Food Added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

////////////////////////////////////////////////
// All Food List
const listFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

/////////////////////////////////////////////////
// Remove Food Item
const removeFood = async (req, res) => {
  try {
    const food = await FoodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await FoodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFoods, removeFood };
