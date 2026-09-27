const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require("../models/listing.js")


const MONGO_URL = "mongodb://127.0.0.1:27017/StayNorth";


main().then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error)
})

async function main() {
    await mongoose.connect(MONGO_URL);

}

const initDb = async () => {
    try {
        await Listing.deleteMany({});
        console.log("Existing listings cleared.");
        const categories = ["trending", "rooms", "iconic-cities", "mountains", "castles", "amazing-pools", "camping", "farms", "arctic", "boats"];
        initData.data = initData.data.map((obj, i) => ({
            ...obj,
            owner:"69da2eb070061d3a7f2671b3",
            category: categories[i % categories.length],
        }));
        await Listing.insertMany(initData.data);
        console.log("Sample listings inserted successfully.");
    } catch (error) {

        console.error("Error initializing database:", error);
    }
};

initDb();
