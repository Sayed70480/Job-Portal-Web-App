import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    salary: {
      type: Number,
      require: true,
    },
    requirements: [
      {
        type: String,
      },
    ],
    location: {
      type: String,
      require: true,
    },
    jobType: {
      type: String,
      require: true,
    },
    position: {
      type: Number,
      require: true,
    },
    experiencelevel: {
      type: Number,
      require: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    applications : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      require: true,
    }]
  },
  { timestamps: true }
);
export const Job = mongoose.model("Job", jobSchema);
