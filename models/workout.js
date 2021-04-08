const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exerciseName: {
        type: String, 
        required: true},
    reps: {
        type: String, 
        required: true},
    }, {
    weight: {
        type: String, 
        required: true},
    }, {
    timestamps: true,
});


module.exports = mongoose.model('Workout', workoutSchema)