import LoggedInUser from "../models/users.js";

export const signin = async (req, res) => {
  const { user } = req.body;
  const { email, picture, name } = user;

  try {
    const existingUser = await LoggedInUser.findOne({ email });

    if (!existingUser) {
      await LoggedInUser.create({
        email: email,
        image: picture,
        name: name,
      });
    }

    res.status(200).json({ result: existingUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};
