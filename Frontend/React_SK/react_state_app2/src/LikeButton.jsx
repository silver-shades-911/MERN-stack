import { useState } from "react";

// Value --> Like or Not Like --> True or False

export default function LikeButton() {
  let [isLiked, setIsliked] = useState(false); // Hooks should be inside component

  function handleLikeButton() {
    console.log("Button is clicked");
    setIsliked(!isLiked); // new value passing
  };

  let iconsSize = { fontSize : "2rem"};
  let iconsSizeLike = { 
    fontSize : "2rem",
    color: "red",
};

  return (
    <div>
      <h3>Like Button</h3>
      <p>{isLiked.toString()}</p>
      
      {isLiked ? (
        <i onClick={handleLikeButton} className="fa-solid fa-heart" style={iconsSizeLike} ></i>
      ) : (
        <i onClick={handleLikeButton} className="fa-regular fa-heart" style={iconsSize} ></i>
      )}
    </div>
  );
}

//  <p>{isLiked.toString()}</p>  In react boolean values are not directly visible
