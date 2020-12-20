const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const User = require('../models/User');

exports.createUser = async (req, res, next) => {
  try {
    const file = req.file;
    console.log(file);

    cloudinary.uploader.upload(file.path, async (error, result) => {
      console.log(result);
      console.log('------------');
      console.log(error);

      const user = await User.create({
        name: 'CC',
        photo: result.secure_url,
      });

      fs.unlinkSync(file.path);
      res.status(201).json(user);
    });
  } catch (err) {}
};
