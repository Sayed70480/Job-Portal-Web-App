import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDataUrl from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

// for user registration

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    console.log(fullname,email,password,phoneNumber,role);
    
    const file = req.file;
    const fileUri = getDataUrl(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    if (!email || !fullname || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    } else {
      const user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({
          message: "user Already exist with this email",
          success: false,
        });
      } else {
        const hashpassword = await bcrypt.hash(password, 10);
        const createUser = await User.create({
          fullname,
          email,
          phoneNumber,
          password: hashpassword,
          role,
          profile :{
            profilePhoto : cloudResponse.secure_url,
          }
        });

        return res.status(200).json({
          message: "Account Created Successfully",
          success: true,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

// for useer login
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is messing",
        success: true,
      });
    }
    let user = await User.findOne({ email: email });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "incorrect email or password",
        success: true,
      });
    }

    if (role != user.role) {
      return res.status(400).json({
        message: "Account does not exist on current role",
        success: true,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        someSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;

    const file = req.file;
    // cloudinary
    const fileUri = getDataUrl(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    if (!email || !fullname || !phoneNumber || !bio || !skills || !file) {
      return res.status(200).json({
        message: "Something is messing",
        success: true,
      });
    }

    let skillsArray = skills.split(",");
    let userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
        success: true,
      });
    }

    // updating data
    if(fullname) user.fullname = fullname;
    if(email) user.email = email;
    if(phoneNumber) user.phoneNumber = phoneNumber;
    if(bio) user.profile.bio = bio
    if(skills) user.profile.skills = skillsArray;

    if(cloudResponse) {
        user.profile.resume = cloudResponse.secure_url // save cloudinary url 
        user.profile.resumeOriginalName = file.originalname // save original file name
       }

    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile Updated Successfully.",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};
