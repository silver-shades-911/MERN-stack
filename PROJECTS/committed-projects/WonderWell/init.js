const mongoose = require("mongoose");
const Listing = require("./model/listingSchema");

// setup database
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb");
        console.log("Connection is successfully established with DB");
    } catch (error) {
        console.error(error);
    }
}
mongoose.set("strictQuery", true);
main();

const Data = [
    {
        title: "Born herself.",
        description:
            "Surface within else deep not keep. Position important cultural answer type significant.",
        image: {
            data: null,
            contentType: null,
        },
        price: 104.14,
        location: "North Jennifer",
    },
    {
        title: "Like purpose.",
        description: "Dark could senior indeed election model.",
        image: {
            data: null,
            contentType: null,
        },
        price: 656.38,
        location: "West Andremouth",
    },
    {
        title: "Western officer.",
        description: "Mr plan represent media reality customer surface.",
        image: {
            data: null,
            contentType: null,
        },
        price: 879.99,
        location: "Swansonside",
    },
    {
        title: "Determine be.",
        description: "Growth service environmental. Bar cover hair religious.",
        image: {
            data: null,
            contentType: null,
        },
        price: 454.25,
        location: "Lake Kevin",
    },
    {
        title: "Meet.",
        description: "Cup card might forward care realize join.",
        image: {
            data: null,
            contentType: null,
        },
        price: 426.85,
        location: "New Timothy",
    },
    {
        title: "Ago.",
        description:
            "Understand sit agree four our. Eat walk value major attention.",
        image: {
            data: null,
            contentType: null,
        },
        price: 215.85,
        location: "Marissaville",
    },
    {
        title: "Something baby site.",
        description: "Record million stuff yes.",
        image: {
            data: null,
            contentType: null,
        },
        price: 713.39,
        location: "Vanessahaven",
    },
    {
        title: "Card garden.",
        description: "By so nearly.",
        image: {
            data: null,
            contentType: null,
        },
        price: 849.51,
        location: "Walkermouth",
    },
    {
        title: "Two contain.",
        description: "Explain former agree current. Adult wife pull actually any.",
        image: {
            data: null,
            contentType: null,
        },
        price: 193.85,
        location: "North Geoffreyton",
    },
    {
        title: "Nearly camera west.",
        description: "Standard next really. Manager fear threat air.",
        image: {
            data: null,
            contentType: null,
        },
        price: 984.61,
        location: "Aaronside",
    },
    {
        title: "Energy media any hand.",
        description: "American risk once second final first. Market chair capital.",
        image: {
            data: null,
            contentType: null,
        },
        price: 604.94,
        location: "Travishaven",
    },
    {
        title: "Race expect century.",
        description: "Better draw half popular property late.",
        image: {
            data: null,
            contentType: null,
        },
        price: 546.15,
        location: "East Judyport",
    },
    {
        title: "Sort task.",
        description: "Area method customer city attorney above decision.",
        image: {
            data: null,
            contentType: null,
        },
        price: 164.86,
        location: "Davidton",
    },
    {
        title: "Employee.",
        description: "Suffer memory collection.",
        image: {
            data: null,
            contentType: null,
        },
        price: 838.67,
        location: "Rogerside",
    },
    {
        title: "Force them.",
        description: "Appear area deal do agency environmental affect.",
        image: {
            data: null,
            contentType: null,
        },
        price: 555.4,
        location: "Thomasmouth",
    },
    {
        title: "Such can.",
        description:
            "Including care how institution data thousand. Against range coach ability.",
        image: {
            data: null,
            contentType: null,
        },
        price: 862.25,
        location: "Smithfort",
    },
    {
        title: "Office growth.",
        description:
            "Beautiful various that nearly pull inside. Year stop doctor seven key.",
        image: {
            data: null,
            contentType: null,
        },
        price: 816.46,
        location: "Lake Kellymouth",
    },
    {
        title: "Collection despite.",
        description: "Agent financial none avoid.",
        image: {
            data: null,
            contentType: null,
        },
        price: 990.53,
        location: "East Elizabethstad",
    },
    {
        title: "Area brother establish.",
        description:
            "Understand peace say culture commercial. Wrong enjoy game party late name share.",
        image: {
            data: null,
            contentType: null,
        },
        price: 494.32,
        location: "Meghanbury",
    },
    {
        title: "Focus difficult the.",
        description:
            "Senior attorney voice minute happy on population. Treatment time sell agency whom window.",
        image: {
            data: null,
            contentType: null,
        },
        price: 114.51,
        location: "Jerrymouth",
    },
    {
        title: "Just thank.",
        description:
            "Father community adult trial though culture. Society agency forward baby prevent perhaps.",
        image: {
            data: null,
            contentType: null,
        },
        price: 264.21,
        location: "Ryanton",
    },
    {
        title: "Money kitchen suffer.",
        description: "Participant newspaper interesting pick.",
        image: {
            data: null,
            contentType: null,
        },
        price: 695.04,
        location: "Tylermouth",
    },
    {
        title: "Country score unit.",
        description:
            "Chance thank source and into side decision. Both box strong kind.",
        image: {
            data: null,
            contentType: null,
        },
        price: 177.67,
        location: "Sheltonbury",
    },
    {
        title: "Can story.",
        description:
            "Defense guy even later treatment. Attack budget international adult important.",
        image: {
            data: null,
            contentType: null,
        },
        price: 173.83,
        location: "Lancemouth",
    },
    {
        title: "Sort better fall.",
        description:
            "Many success of. Form degree politics news big probably about.",
        image: {
            data: null,
            contentType: null,
        },
        price: 395.67,
        location: "West Timothybury",
    },
    {
        title: "Win include heavy.",
        description: "Man artist behavior group trouble design social.",
        image: {
            data: null,
            contentType: null,
        },
        price: 421.62,
        location: "Lake Phillipside",
    },
    {
        title: "Thought.",
        description: "Condition effect gas thank position run.",
        image: {
            data: null,
            contentType: null,
        },
        price: 447.29,
        location: "Joneston",
    },
    {
        title: "Ahead study.",
        description: "Pretty husband open.",
        image: {
            data: null,
            contentType: null,
        },
        price: 977.0,
        location: "Deborahton",
    },
    {
        title: "Tv arrive learn.",
        description: "However with right wall capital though none.",
        image: {
            data: null,
            contentType: null,
        },
        price: 383.94,
        location: "Port Michaelbury",
    },
    {
        title: "Religious safe.",
        description:
            "All remember painting still together. Republican necessary off staff hard again.",
        image: {
            data: null,
            contentType: null,
        },
        price: 644.48,
        location: "East Michaelshire",
    },
];

async function initDB() {
    try {
        let deleteRes = await Listing.deleteMany({});
        console.log(deleteRes);
        let updatedData = Data.map((listing) => ({
                ...listing,
                owner: "67a7551fec764771bd05d858",
        }));
        await Listing.insertMany(updatedData);
        console.log("Operation Done!");
    } catch (error) {
        console.error(error);
    }
}

// initDB();

async function addCategory() {
    try {
        let Data = await Listing.find({});
        let updatedData = Data.map((listing) => ({
            _doc: {
                ...listing._doc,
                owner: "67a7551fec764771bd05d858",
            },
            owner: undefined, // Remove owner from the outer object
        }));
        console.log(updatedData);
        await Listing.insertMany(updatedData);
        console.log("Operation Done!");
    } catch (error) {
        (err) => console.log(err);
    }
}

// addOwner();

// category index for filter

async function createIndexForFilter() {
let res = await Listing.collection.createIndex({category : 1});
 console.log(res);    
};

// createIndexForFilter();

async function createTextIndexForSearch() {
    await Listing.collection.createIndex({
        title: "text",
        category: "text",
        location: "text",
    });
    console.log("Text index created!");
  }
// createTextIndexForSearch();

async function createIndexForPrice() {
   let res = await Listing.collection.createIndex({
        price: 1
    });
    console.log(res);
};

// createIndexForPrice();