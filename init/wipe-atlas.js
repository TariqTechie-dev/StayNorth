// dele tes all data from the database. Use with caution!
const mongoose = require("mongoose");

const ATLAS_URL = "mongodb+srv://Tariq:yeEc8oDqZFDoHiWBCo@luxescentscluster.rokqy3l.mongodb.net/Wanderlust?appName=LuxeScentsCluster";

async function wipe() {
  await mongoose.connect(ATLAS_URL);
  await mongoose.connection.db.dropDatabase();
  console.log("Database wiped clean.");
  await mongoose.connection.close();
}

wipe().catch((e) => console.error(e));
