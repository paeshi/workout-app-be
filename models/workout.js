const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    uid: String,
    workout: {
      type: String,
      required: false,
    },
    exercise: {
      type: String,
      required: false,
    },
    reps1: {
      type: String,
      required: false,
    },
    reps2: {
      type: String,
      required: false,
    },
    reps3: {
      type: String,
      required: false,
    },
    reps4: {
      type: String,
      required: false,
    },
    reps5: {
      type: String,
      required: false,
    },
    weight1: {
      type: String,
      required: false,
    },
    weight2: {
      type: String,
      required: false,
    },
    weight3: {
      type: String,
      required: false,
    },
    weight4: {
      type: String,
      required: false,
    },
    weight5: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);
