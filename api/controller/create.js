const contactsDB = require("../model/contacts");

exports.post_create = (req, res, next) => {
  console.log(req.body);
// creat a insert object 
  var contacts = new contactsDB({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  });

// saving object using promise 
  contacts
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        res: "contact added successfully",
      });
    })
    .catch((error) => {
      console.log(error);

      res.status(200).json({
        res: "something going wrong",
      });
    });
};
