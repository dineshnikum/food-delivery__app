import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dineshnikum1_db_user:s0ahyCvc4HCClND6@cluster0.m92udxz.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB connected"));
};
