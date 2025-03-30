import { useState } from "react";

function CommentCreateBox({addNewComment}) {
    // input elements style
    let inputStyle = { backgroundColor: "white", color: "black" };

    // state variable
    let [commentData, setCommentData] = useState({
        userName: "",
        review: "",
        rating: 0,
    });

    // handleCommentInputData  -> function to handle onChange in form

    function handleCommentInputData(event) {

        console.log(`${event.target.name} = ${event.target.value}`);
        setCommentData(
            (currData) => {
                return (
                    {
                        ...currData,
                        [event.target.name]: [event.target.value]
                    }
                );
            }
        );
    };

    // handleCommentFormSubmission  -> handle form submission

    function handleCommentFormSubmission(event) {

        event.preventDefault();
        console.log("commentData -> ", commentData);
        addNewComment(commentData);  // updater function from parent of Comment component 
        setCommentData({
            userName: "",
            review: "",
            rating: 0,
        });
    }


    return (
        <div>
            <h2>| Please add your valuable experience </h2>
            <form action="#" style={{ border: "1px solid black", padding: "2rem" }} onSubmit={handleCommentFormSubmission}>
                <label htmlFor="userName">Username</label>
                <br />
                <input type="text" name="userName" id="userName" style={inputStyle} onChange={handleCommentInputData} value={commentData.userName} />
                <br />
                <br />
                <label htmlFor="review">Review</label>
                <br />
                <textarea name="review" id="review" cols="30" rows="10" style={inputStyle} onChange={handleCommentInputData} value={commentData.review}></textarea>
                <br />
                <br />
                <label htmlFor="rating" >Rating: </label>
                &nbsp;&nbsp;
                <input type="range" name="rating" id="rating" step={1} max={5} min={0} onChange={handleCommentInputData} value={commentData.rating}/>
                <br />
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}


export default CommentCreateBox;