const { Schema, model } = require("mongoose")

// schema
const studentSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, default: null },
    gender: { type: String, default: null },
    currentSemester: { type: String, default: null },
    gpa: { type: Number, default: null },
    rollNo: { type: Number, default: null },
    subjects: { type: [String], default: [] },
    attendencePercentage: { type: Number, default: 100 },
    grades: { type: [String], default: [] },
  },
  { timestamps: true }
)

// virtual
studentSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`
})

// model
const StudentModel = model("student", studentSchema)

module.exports = StudentModel
