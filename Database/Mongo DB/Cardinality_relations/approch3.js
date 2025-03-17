const mongoose = require("./DBsetup");

// ###### APPROACH 2) ONE TO MANY (means squillions)


// # consumer
const personSchema = new mongoose.Schema({
    username : String,
    email : String,
});

const Person = mongoose.model( "Person", personSchema);

// addUser fn
async function addPerson( username, email) {
    let person1 = new Person({
        username : username,
        email : email,
    });

    let req = await person1.save();
    console.log(req);
};


// # POSTS
const postSchema = new mongoose.Schema({
    content : String,
    likes : Number,
    person : { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
});

const Post = mongoose.model("Post", postSchema);

async function addPost(content, likes, username) {
    let post1 = new Post({
        content : content,
        likes : likes,
    });

    let person = await Person.findOne({username : username });
    post1.person = person;
    let req = await post1.save();
    console.log(req);
};


async function read() {
    let res = await Post.find({}).populate("person");
    console.log(res);
};

addPerson("Realiana", "Realiana123@gmail.com"); // adding 2nd user 
addPost("Guyys Lookout my new Luxury Hotel", 500600, "Zara"); // adding 2nd post of user 1 "Zara"
read();
