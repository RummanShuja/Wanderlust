const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { required } = require('joi');
const default_image = 'https://st4.depositphotos.com/2361751/29890/i/1600/depositphotos_298907548-stock-photo-beautiful-house-in-nature.jpg';

const listingSchema = new Schema ({
    title:{
        type: String,
        required: true
    },
    description: String,
    image: {
        url: String,
        filename: String,
        // type: String,
        // default: default_image,
        // set: (v) => v==="" ? default_image : v,
    },
    price: Number,
    location: String,    
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            require: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
      },
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: { $in : listing.reviews }});
    }
}); 

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;