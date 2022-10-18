const { Router } = require("express")
const studentsRouter = require("./routes/students.router")

const api = Router()

api.use("/students", studentsRouter)

module.exports = api
