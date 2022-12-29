import mongoose from "mongoose";

const AnalyticalSchema = new mongoose.Schema(
    {

    }, 
    { timestamps: true }
);
export default mongoose.model("Analytics", AnalyticalSchema);