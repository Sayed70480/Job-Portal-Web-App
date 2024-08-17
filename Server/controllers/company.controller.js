import { Company } from "../models/company.model.js";

export const registercompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Compnay name is requried",
        success: false,
      });
    }
    let compnay = await Company.findOne({ name: companyName });
    if (compnay) {
      return res.status(400).json({
        message: "You can't register same company",
        success: false,
      });
    }
    const company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company are register",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCompanies = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(400).json({
        message: "companies not found!",
        success: false,
      });
    }

    return res.status(201).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCompanybyId = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "company are not register",
        scuccess: false,
      });
    }

    return res.status(201).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    // cloudinary
    const updatedData = { name, description, website, location };
    const companyId = req.params.id;
    const company = await Company.findByIdAndUpdate(companyId, updatedData, {
      new: true,
    });

    return res.status(200).json({
      message: "copmany information are updated",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};