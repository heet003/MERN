const express = require('express');
const { check } = require('express-validator');
const placesControllers = require('../controllers/places-controller');
const fileUpload = require('../middleware/upload');
const checkAuth = require('../middleware/auth');

const router = express.Router();

// GET /API/PLACES/:pid   "GET PLACE BY ID"
router.get('/:pid', placesControllers.getPlaceById);

// GET /API/PLACES/USER/:uid   "GET PLACES BY USER ID"
router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.use(checkAuth);

// POST /API/PLACES/   "CREATE PLACE"
router.post(
  '/',
  fileUpload.single('image'),
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
  ],
  placesControllers.createPlace
);

// PATCH /API/PLACES/:pid   "UPDATE PLACE"
router.patch(
  '/:pid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  placesControllers.updatePlace
);

// DELETE /API/PLACES/:pid   "DELETE PLACE"
router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
