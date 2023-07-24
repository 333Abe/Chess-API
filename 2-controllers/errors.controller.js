// exports.handle404Paths = (req, res, next) => {
//   res.status(404).send({ msg: "Path not found" });
// };

exports.handle404Messages = (err, req, res, next) => {
  if (err.msg === "Not found") {
    res.status(404).send(err);
  } else {
    next(err);
  }
};

exports.handle400Paths = (err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ msg: "Bad request" });
  } else {
    next(err);
  }
};
