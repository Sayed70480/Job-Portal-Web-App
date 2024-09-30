import { Job } from "../models/job.model.js";

// for admin where admin can post the new job
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      requirements,
      location,
      jobType,
      position,
      experience,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !salary ||
      !requirements ||
      !location ||
      !jobType ||
      !position ||
      !experience ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      salary: Number(salary),
      requirements: requirements.split(","),
      location,
      jobType,
      position,
      experiencelevel: experience,
      created_by: userId,
      company: companyId,
    });

    return res.status(200).json({
      message: "New Job Created Successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// for student where student can see all the jobs on their account

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
   
    const jobs = await Job.find(query).populate("company").sort({createdAt : -1});
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs Not Found",
        success: false,
      });
    }

 
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// for student where student can see detail of single job
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate("applications");
    if (!job) {
      return res.status(404).json({
        message: "Job Not Found!",
        success: false,
      });
    }

    return res.status(201).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// how many job's admin created he can see
export const getadminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const adminjobs = await Job.find({ created_by: adminId });
    if (!adminjobs) {
      return res.status(404).json({
        message: "Jobs Not Found",
        success: false,
      });
    }
    return res.status(201).json({
      adminjobs,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};
