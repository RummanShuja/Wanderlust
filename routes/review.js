const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewOwner} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
//Post review Route
router.post('/', isLoggedIn, validateReview,wrapAsync(reviewController.createReview));

//delete review route
router.delete('/:reviewId',isLoggedIn, isReviewOwner, wrapAsync(reviewController.destroyReview));

module.exports = router;    