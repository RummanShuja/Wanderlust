const mongoose = require('mongoose');
const initData  = require("./data.js");
const Listing  = require("../models/listing.js");

main()
    .then(()=>{
        console.log("mongoose connected successfully");
    })
    .catch((err)=>{console.log(ere)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,
        owner: "67db995bfbe733527048da07",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();