const { useRoutes } = require( "react-router-dom" );
const User = require("../models/user.model");

module.exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.uploadImage = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.file) {
      return res.status(400).send({ message: "No image file provided" });
    }

    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: { image_url: `${req.file.path}` },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ message: "Image uploaded", user });
  } catch (err) {
    res.status(500).send(err);
  }
};


module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length < 1) {
      return res.status(404).send({ message: "No users found" });
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateUserByID = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.user_id, req.body, {
      new: true,
    });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.deleteUserByID = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.user_id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }

  dashboard: async ( req, res ) =>
  {
    try
    {
      const users = await users.find().users()
      res.status( 200 ).send( { useRoutes } )
    }
    catch ( error )
    {
      return res.status( 500 ).json( { error: error.message } );
    }
  };

};
