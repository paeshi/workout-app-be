const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    uid: String,
    workout: {
        type: String, 
    },
    exercise: {
        type: String, 
        },
    reps1: {
        type: String, 
        },
    reps2: {
        type: String, 
        },
    reps3: {
        type: String, 
        },
    reps4: {
        type: String, 
        },
    reps5: {
        type: String, 
        },
    weight1: {
        type: String, 
        },
    weight2: {
        type: String, 
        },
    weight3: {
        type: String, 
        },
    weight4: {
        type: String, 
        },
    weight5: {
        type: String, 
        },
    }, {
    timestamps: true,
});


module.exports = mongoose.model('Workout', workoutSchema)