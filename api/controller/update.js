const contactsDB = require("../model/contacts");

exports.put_update = (req, res, next) => {
  contactsDB
    .findOneAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          number: req.body.number,
        },
      }
    )
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((error) => {
      return next(error);
    });


};
