import bcryptjs from "bcryptjs";
import { User, validateRegister } from "../../../models/user/index.js";
import errorJson from "../../../../utils/error.js";
import generateRandomCode from "../../../../utils/generate-random-code.js";
import { signAccessToken } from '../../../../utils/jwtHelper.js';

let errorObject = {};

export default async (req, res) => {
  const { error } = validateRegister(req.body);

  if (error) {
    if (error) {
      if (error.details[0].message.includes("email"))
        errorObject = { msg: "Please provide a valid email!" };
      else if (error.details[0].message.includes("password"))
        errorObject = { msg: "Please provide a password that longer than 6 letters and shorter than 20 letters.", };
      else if (error.details[0].message.includes("username"))
        errorObject = { msg: "Please provide a name that longer than 3 letters and shorter than 30 letters.", };
      else {
        console.log(error);
        errorObject = { msg: "Please provide all the required fields!" };
      }
      return res
        .status(400)
        .json(errorJson(errorObject.msg, "Error while registering!"));
    }
  }

  let username, unique, tempName;
  let name = req.body.username;
  name.includes(" ")
    ? (tempName = name.trim().split(" ").slice(0, 1).join("").toLowerCase().trim())
    : (tempName = name.toLowerCase().trim());

  do {
    username = tempName + generateRandomCode();
    unique = await User.countDocuments({ username: username }).catch((err) => {
      return res
        .status(500)
        .json(errorJson(err.message, "An internal server error occurred while counting username"));
    });
  } while (unique);

  const hash = await bcryptjs.hash(req.body.password, 10);

  let user = new User({
    email: req.body.email.trim(),
    password: hash,
    username: username,
    profileImage: "", // Nếu bạn không muốn cập nhật hình ảnh hồ sơ, bạn có thể đặt giá trị này thành ""
    bio: "",
    lastLogin: Date.now(),
  });

  user = await user.save().catch((err) => {
    return res.status(500).json(errorJson(err.message, "An internal server error occurred while registering you."));
  });

  const authorization = await signAccessToken(user._id);

  return res.status(200).send(authorization);
};
