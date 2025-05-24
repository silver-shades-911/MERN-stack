import { useState } from "react";
import "./Comment.css";
import CommentCreateBox from "./CommentCreateBox";

export default function Comment() {
    // define state variable because Comments are frequently adding and need to re-render UI
    let [comments, setComments] = useState([
        {
            userName: "@asim543",
            review:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia enim eum inventore illum! Nemo rerum consequatur laboriosam culpa!",
            rating: 4,
        },
    ]);

    // Creating function to update state variable
    function addNewComment(comment) {
        setComments((currCommentsArray) => {
            return [...currCommentsArray, comment];
        });
    }
    /* 
    *   APPROCH FOR COMPONENT HIERARCHY
    *  1) APPROCH #1
        Comment
            |
            |
            V
        CommentCreatebox   
    
        - This addNewComment we are passing as prop to its child, 
          so when comment form is submit it invoke this function and send new comment data in this function ,so our comments state variable get added new comment and store & UI re-render
        - We use this approch beacuse comments not only contain current comment msg or recently submitted msg, it contain all comments
          for that we have this comments Array of object
          
          
    *   2) APPROCH #2
         CommentCreatebox
             |
             |
             V
          Comment
          
    ?   Why we didnot use this approch ?
        - If we use this approch, it able to pass Comment data ---"props" ---> Comment and able to show Only 1 comment msg, that is recently submitted 
        - Because it didnot have state variable to store comments
    ?   If we add that vaiable, then what ?
        - then we no need of Comment Component , we basically writing all code in single component (Thats not recommendate)          
    */
    return (
        <div className="mainBox">
            <div className="commentBox">
                {comments.map((comment, idx) => {
                    return (
                        <div className="commentMessage" key={idx}>
                            <span>
                                <b>{comment.userName}</b>
                            </span>
                            &nbsp; &nbsp; &nbsp;
                            <span>[🌟{comment.rating}]</span>
                            <br />
                            <p>{comment.review}</p>
                        </div>
                    );
                })}
            </div>
            <br />
            <br />
            <hr />
            <br />
            <CommentCreateBox addNewComment={addNewComment} />
        </div>
    );
}
