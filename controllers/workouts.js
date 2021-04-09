const Workout = require('../models/workout')


async function index(req, res) {
    try {
        const workouts = await Workout.find({uid: req.query.uid}).sort('-createdBy');
        res.status(200).json(workouts)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: 'something went wrong'})
    }
}


async function create(req, res) {
    try {
        const workout = await Workout.create(req.body);
        req.query.uid = workout.uid;
        index(req, res)
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}



async function deleteWorkout(req, res) {
    try {
        const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
        req.query.uid = deletedWorkout.uid;
        index(req, res)
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}




async function update(req, res) {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, {new: true}
            );
            req.query.uid = updatedWorkout.uid;
            index(req, res);
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})

    }
}






module.exports = {
    index, 
    create,
    delete: deleteWorkout,
    update
}