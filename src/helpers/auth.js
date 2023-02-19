const helpers = {};

helpers.isAutehnticated = (req, res, next) => {
  if (req.isAutehnticated()) {
    return next();
  }
  req.flash("error", "No autorizado");
  res.redirect("/users/signin");
};

module.exports = "helpers";
