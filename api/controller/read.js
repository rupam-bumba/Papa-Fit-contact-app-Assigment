const contactsDB = require("../model/contacts");

exports.get_read = (req, res, next) => {
  //   console.log(typeof req.query.qu);
  var param = {};

  if (isNaN(parseInt(req.query.qu))) {
    param = {
      $or: [
        { name: { $regex: req.query.qu, $options: "i" } },
        { email: { $regex: req.query.qu, $options: "i" } },
      ],
    };
  } else {
    param = { number: parseInt(req.query.qu) };
  }
  console.log(param);

  contactsDB
    .find(param)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        res: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(200).json({
        res: "something going wrong",
      });
    });
};
