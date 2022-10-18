const HttpException = require("../../utils/exceptions")
const StudentModel = require("../models/student.model")

const httpCreateStudent = async (req, res, next) => {
  try {
    const student = new StudentModel(req.student)
    await student.save()
    res.status(200).json({ success: true, message: "Student created successfully", student })
  } catch (error) {
    next(error)
  }
}

const httpGetStudent = async (req, res, next) => {
  try {
    const student = await StudentModel.findById(req.params.id)
    if (!student) throw new HttpException("Student does not exists", 404)
    res.status(200).json({ success: true, message: "Student fetched successfully", student })
  } catch (error) {
    next(error)
  }
}

const httpUpdateStudent = async (req, res, next) => {
  try {
    const student = await StudentModel.findById(req.params.id)
    if (!student) throw new HttpException("Student does not exists", 404)

    const payload = req.body
    for (let prop in payload) {
      student[prop] = payload[prop]
    }
    await student.save()
    res.status(200).json({ success: true, message: "Student updated successfully", student })
  } catch (error) {
    next(error)
  }
}

const httpDeleteStudent = async (req, res, next) => {
  try {
    const student = await StudentModel.findByIdAndDelete(req.params.id)
    res.status(200).json({ success: true, message: "Student was deleted!" })
  } catch (error) {
    next(error)
  }
}

module.exports = { httpCreateStudent, httpGetStudent, httpUpdateStudent, httpDeleteStudent }
