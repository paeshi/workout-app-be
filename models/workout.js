const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    uid: String,
    workout: {
        type: String, 
        required: true},
    exercise: {
        type: String, 
        required: true},
    reps1: {
        type: String, 
        required: true},
    reps2: {
        type: String, 
        required: true},
    reps3: {
        type: String, 
        required: true},
    reps4: {
        type: String, 
        required: true},
    reps5: {
        type: String, 
        required: true},
    weight1: {
        type: String, 
        required: true},
    weight2: {
        type: String, 
        required: true},
    weight3: {
        type: String, 
        required: true},
    weight4: {
        type: String, 
        required: true},
    weight5: {
        type: String, 
        required: true},
    }, {
    timestamps: true,
});


module.exports = mongoose.model('Workout', workoutSchema)