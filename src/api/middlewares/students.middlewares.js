const HttpException = require("../../utils/exceptions")

const validateStudentsPostRequest = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body

    if (!firstName) throw new HttpException("Please enter first name", 400)
    if (!lastName) throw new HttpException("Please enter last name", 400)
    if (!email) throw new HttpException("Please enter email", 400)

    req.student = { firstName, lastName, email }
    next()
  } catch (error) {
    next(error)
  }
}

const validateUpdateRequest = (req, res, next) => {
  try {
    // properties that a student is alloed to update/change
    const valid_properties = ["firstName", "lastName", "email", "age", "gender"]
    const payload = req.body

    for (let prop in payload) {
      if (!valid_properties.includes(prop)) throw new HttpException(`You are not authorized to update ${prop}`, 403)
    }

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = { validateStudentsPostRequest, validateUpdateRequest }
