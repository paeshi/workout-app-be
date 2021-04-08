const Workout = require('../models/workout')


async function index(req, res) {
    // error handling:
    try {
        //    get all skills from model
        const workouts = await Workout.find({});
        // send json
        res.status(200).json(workouts)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: 'something went wrong'})
    }
}


async function create(req, res) {
    try {
        await Workout.create(req.body);
    //    res.status(201).json({ msg: 'skill created successfully'})
    index(req, res);
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}


module.exports = {
    index, 
    create,
}