const mongoose = require("./DBsetup");

// ------------- Person Schema & Model -------------
// Define a schema for the Person collection. Each person has a username and email.
// This represents the consumer in the relationship.
const personSchema = new mongoose.Schema({
  username: String,
  email: String,
});
const Person = mongoose.model("Person", personSchema);

/*
  Function: addPerson
  - Purpose: Creates and saves a new Person document.
  - Data Flow: Accepts a username and email, creates a Person instance, and saves it to the database.
*/
async function addPerson(username, email) {
  let person1 = new Person({
    username: username,
    email: email,
  });

  let req = await person1.save();
  console.log(req);
}

// ------------- Post Schema & Model -------------
// Define a schema for the Post collection. Each post has content, likes, and a reference to a Person.
// The 'person' field is an ObjectId that references a Person document, linking a post to its author.
const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  person: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
});
const Post = mongoose.model("Post", postSchema);

/*
  Function: addPost
  - Purpose: Creates and saves a new Post document associated with a specific Person.
  - Data Flow:
      1. A new Post instance is created with content and likes.
      2. The Person collection is queried to find the Person document by username.
      3. The post's 'person' field is set to reference the found Person.
      4. The Post is saved, establishing the relationship.
*/
async function addPost(content, likes, username) {
  let post1 = new Post({
    content: content,
    likes: likes,
  });

  // Find the person by username to link the post to the correct person.
  let person = await Person.findOne({ username: username });
  post1.person = person;
  let req = await post1.save();
  console.log(req);
}

/*
  Function: read
  - Purpose: Retrieves all posts and populates the associated Person data.
  - Data Flow: Uses Mongoose's populate() method to replace the 'person' ObjectId with the actual Person document.
*/
async function read() {
  let res = await Post.find({}).populate("person");
  console.log(res);
}

// ------- Practical Usage: Create Documents & Read Data -------

// Create a new Person (consumer)
addPerson("Realiana", "Realiana123@gmail.com");

// Create a new Post linked to a Person. 
// Note: In this example, we attempt to add a post for a user with username "Zara". 
// Ensure that a Person with that username exists or adjust the username accordingly.
addPost("Guyys Lookout my new Luxury Hotel", 500600, "Zara");

// Retrieve and display posts with their associated Person data
read();
