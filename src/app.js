const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { default: helmet } = require("helmet")
const api = require("./api/api")

const app = express()

// middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(helmet())
app.use(express.json())

// router
app.use("/api", api)
app.use((err, req, res, next) => {
  const payload = {
    statusCode: err.statusCode ?? 500,
    message: err.message ?? "Internal Server Error",
  }
  res.status(err.statusCode ?? 500).json(payload)
})

module.exports = app
