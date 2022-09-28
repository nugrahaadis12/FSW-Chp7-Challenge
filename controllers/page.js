exports.adminDashboard = async (req, res) => {
  res.render('adminDashboard')
}

exports.mainDashboard = (req, res) => {
  res.render('mainDashboard')
}

exports.registerPage = (req, res) => {
  res.render('register')
}

exports.loginPage = (req, res) => {
  res.render('login')
}