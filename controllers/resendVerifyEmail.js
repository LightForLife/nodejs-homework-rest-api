const { User } = require("../models/user");
const { HttpError, ctrlWrapper, sendEmail } = require("../helpers");

const { PORT } = process.env;
const BASE_URL = `http://localhost:${PORT}`;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const link = `${BASE_URL}/api/users/verify/${user.verificationToken}`;
  console.log(link);
  console.log(user.verificationToken);

  const mail = {
    to: email, // Change to your recipient
    from: "arturlvchnk@gmail.com", // Change to your verified sender
    subject: "Confirm your email",
    html: `<a href=${link} target="_blank">Click on this link to confirm registration</a>`,
  };

  await sendEmail(mail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = { resendVerifyEmail: ctrlWrapper(resendVerifyEmail) };
