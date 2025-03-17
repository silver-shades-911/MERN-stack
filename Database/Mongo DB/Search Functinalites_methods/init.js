const mongoose = require("mongoose");

let listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Amazing view",
      "Icons",
      "Beachfront",
      "Lakefront",
      "Mansion",
      "Amazing Pool",
      "Farms",
      "Castles",
      "Rooms",
      "Treehouse",
      "Luxury",
      "Cabins",
      "Tiny homes",
      "Islands",
      "Countryside",
      "Historical Homes",
      "Design",
      "Earth Homes",
      "Artic",
      "Top Cities",
      "Top of the world",
      "Domes",
      "Tropical",
      "Camping",
      "Boats",
      "National Park",
      "Caves",
    ],
  },
});

let Listing = new mongoose.model("listing", listingSchema);
module.exports = Listing;

// setup database
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/searchFunctionality");
    console.log("Connection is successfully established with DB");
  } catch (error) {
    console.error(error);
  }
}
mongoose.set("strictQuery", true);
main();

const Data = [
  {
    title: "The Ritz-Carlton, Paris",
    price: 750,
    location: "Paris, France",
    category: "Luxury",
  },
  {
    title: "Marina Bay Sands",
    price: 850,
    location: "Singapore",
    category: "Amazing view",
  },
  {
    title: "The Plaza Hotel",
    price: 900,
    location: "New York, USA",
    category: "Icons",
  },
  {
    title: "Santorini Dream Villas",
    price: 400,
    location: "Santorini, Greece",
    category: "Beachfront",
  },
  {
    title: "Lake Como Retreat",
    price: 600,
    location: "Lake Como, Italy",
    category: "Lakefront",
  },
  {
    title: "The Beverly Hills Hotel",
    price: 1200,
    location: "Los Angeles, USA",
    category: "Mansion",
  },
  {
    title: "Infinity Pool Villa",
    price: 550,
    location: "Bali, Indonesia",
    category: "Amazing Pool",
  },
  {
    title: "Swiss Mountain Chalet",
    price: 700,
    location: "Zermatt, Switzerland",
    category: "Countryside",
  },
  {
    title: "Historic Edinburgh Castle Stay",
    price: 500,
    location: "Edinburgh, Scotland",
    category: "Castles",
  },
  {
    title: "Tokyo Skyline Apartment",
    price: 300,
    location: "Tokyo, Japan",
    category: "Top Cities",
  },
  {
    title: "Dubai Desert Oasis",
    price: 650,
    location: "Dubai, UAE",
    category: "Earth Homes",
  },
  {
    title: "Private Island Getaway",
    price: 2000,
    location: "Maldives",
    category: "Islands",
  },
  {
    title: "Hobbiton Village Stay",
    price: 450,
    location: "Matamata, New Zealand",
    category: "Caves",
  },
  {
    title: "Nordic Glass Igloo",
    price: 850,
    location: "Lapland, Finland",
    category: "Artic",
  },
  {
    title: "Treehouse Paradise",
    price: 300,
    location: "Costa Rica",
    category: "Treehouse",
  },
  {
    title: "Floating House in Amsterdam",
    price: 400,
    location: "Amsterdam, Netherlands",
    category: "Boats",
  },
  {
    title: "Grand Canyon National Park Lodge",
    price: 550,
    location: "Arizona, USA",
    category: "National Park",
  },
  {
    title: "Rainforest Eco Retreat",
    price: 350,
    location: "Amazon Rainforest, Brazil",
    category: "Tropical",
  },
  {
    title: "Scottish Highlands Cottage",
    price: 450,
    location: "Scotland, UK",
    category: "Countryside",
  },
  {
    title: "Santorini Cliffside Cave House",
    price: 600,
    location: "Santorini, Greece",
    category: "Caves",
  },
  {
    title: "Riverside Jungle Lodge",
    price: 320,
    location: "Chiang Mai, Thailand",
    category: "Farms",
  },
  {
    title: "Alaskan Mountain Cabin",
    price: 500,
    location: "Denali, Alaska, USA",
    category: "Cabins",
  },
  {
    title: "Sahara Desert Camp",
    price: 250,
    location: "Merzouga, Morocco",
    category: "Camping",
  },
  {
    title: "Sydney Opera House View Apartment",
    price: 600,
    location: "Sydney, Australia",
    category: "Icons",
  },
  {
    title: "Petra Cave Hotel",
    price: 750,
    location: "Petra, Jordan",
    category: "Historical Homes",
  },
  {
    title: "Cliffside Luxury Resort",
    price: 900,
    location: "Phuket, Thailand",
    category: "Amazing view",
  },
  {
    title: "Ski Chalet in Aspen",
    price: 1200,
    location: "Aspen, Colorado, USA",
    category: "Top of the world",
  },
  {
    title: "Venetian Canal House",
    price: 800,
    location: "Venice, Italy",
    category: "Design",
  },
  {
    title: "Bora Bora Overwater Bungalow",
    price: 1800,
    location: "Bora Bora, French Polynesia",
    category: "Islands",
  },
  {
    title: "Gothic Castle Retreat",
    price: 750,
    location: "Transylvania, Romania",
    category: "Castles",
  },
  {
    title: "Rocky Mountain Retreat",
    price: 500,
    location: "Banff, Canada",
    category: "National Park",
  },
  {
    title: "Floating Lodge in Amazon",
    price: 350,
    location: "Amazon Rainforest, Peru",
    category: "Boats",
  },
  {
    title: "Underwater Hotel Experience",
    price: 2000,
    location: "Maldives",
    category: "Luxury",
  },
  {
    title: "Cliffside Cabin in Norway",
    price: 700,
    location: "Fjordland, Norway",
    category: "Cabins",
  },
  {
    title: "Great Wall of China View Hotel",
    price: 650,
    location: "Beijing, China",
    category: "Icons",
  },
  {
    title: "Amazon Canopy Treehouse",
    price: 450,
    location: "Manaus, Brazil",
    category: "Treehouse",
  },
  {
    title: "Machu Picchu Eco Lodge",
    price: 550,
    location: "Cusco, Peru",
    category: "Historical Homes",
  },
  {
    title: "Icelandic Volcano Retreat",
    price: 800,
    location: "Reykjavik, Iceland",
    category: "Earth Homes",
  },
  {
    title: "Bamboo Beach Hut",
    price: 250,
    location: "Phu Quoc, Vietnam",
    category: "Beachfront",
  },
  {
    title: "Hidden Jungle Bungalow",
    price: 350,
    location: "Ubud, Bali",
    category: "Tropical",
  },
  {
    title: "Swiss Alps Dome Stay",
    price: 900,
    location: "Interlaken, Switzerland",
    category: "Domes",
  },
  {
    title: "Himalayan Glacier View Camp",
    price: 600,
    location: "Everest Base Camp, Nepal",
    category: "Top of the world",
  },
  {
    title: "French Countryside Manor",
    price: 500,
    location: "Provence, France",
    category: "Countryside",
  },
  {
    title: "Yacht Stay in Monaco",
    price: 1500,
    location: "Monaco",
    category: "Boats",
  },
];

async function initDB() {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(Data)
    .then(
      (res) => console.log(res)
    );
    
  } catch (error) {
    console.error(error);
  }
}

// initDB();

async function createPriceIndex() {
  await Listing.collection.createIndex({ category: 1 });
  console.log("Index on price created!");
}
// createPriceIndex();

async function showIndexes() {
  const indexes = await Listing.collection.indexes();
  console.log(indexes);
}
// showIndexes();
async function getDetailedIndexInfo() {
  const indexes = await Listing.collection.indexInformation({ full: true });
  console.log(indexes);
}
// getDetailedIndexInfo();

async function createTextIndex() {
  await Listing.collection.createIndex({
      title: "text",
      category: "text",
      location: "text",
  });
  console.log("Text index created!");
}
// createTextIndex();
