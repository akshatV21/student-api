const { Router } = require("express")
const { httpCreateStudent, httpGetStudent, httpUpdateStudent, httpDeleteStudent } = require("../controllers/students.controller")
const { validateStudentsPostRequest, validateUpdateRequest } = require("../middlewares/students.middlewares")

const router = Router()

// creating a new student
router.post("/", validateStudentsPostRequest, httpCreateStudent)

// fetching a single student
router.get("/:id", httpGetStudent)

// update route
router.patch("/:id", validateUpdateRequest, httpUpdateStudent)

// deleting the student
router.delete("/:id", httpDeleteStudent)

module.exports = router
