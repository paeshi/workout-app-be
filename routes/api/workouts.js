const express = require('express');
const router = express.Router();
const workoutCtrl = require('../../controllers/workouts')

router.get('/', workoutCtrl.index);
router.post('/', workoutCtrl.create);





module.exports = router;