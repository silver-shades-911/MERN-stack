import { useState } from "react";
import { useFormik } from 'formik'; // we are using Formik for client side validation

function CommentCreateBox({addNewComment}) {
    // input elements style
    let inputStyle = { backgroundColor: "white", color: "black" };

    // state variable
    // let [commentData, setCommentData] = useState({
    //     userName: "",
    //     review: "",
    //     rating: 0,
    // });


    // validate function 
    const validate = values => {
        const errors = {};

        // Conditions for userName
        if (!values.userName) {
          errors.userName = 'Username is required.';
        } else if (values.userName.length > 15) {
          errors.userName = 'Must be 15 characters or less';
        }
      

        // Conditions for review
        if (!values.review) {
          errors.review = 'Please write your valuable feedback';
        } else if (values.review.length > 100) {
          errors.review = 'Must be 100 characters or less';
        }
      
        // Condition for rating
        if (!values.rating) {
          errors.rating = 'Please give us a rating';
        } else if (values.rating > 5 || values.rating < 0 ) {
          errors.rating = 'Invalid rating, Outoff range';
        }
      
        return errors;
      };


    // formik state varibale
    const formik = useFormik({
        initialValues: {
          userName: '',
          review: '',
          rating: 0,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    

//* Regular Form handling functions
    // handleCommentInputData  -> function to handle onChange in form
    // function handleCommentInputData(event) {

    //     console.log(`${event.target.name} = ${event.target.value}`);
    //     setCommentData(
    //         (currData) => {
    //             return (
    //                 {
    //                     ...currData,
    //                     [event.target.name]: [event.target.value]
    //                 }
    //             );
    //         }
    //     );
    // };


    // handleCommentFormSubmission  -> handle form submission
    // function handleCommentFormSubmission(event) {
    //     event.preventDefault();
    //     console.log("commentData -> ", commentData);
    //     addNewComment(commentData);  // updater function from parent of Comment component 
    //     setCommentData({
    //         userName: "",
    //         review: "",
    //         rating: 0,
    //     });
    // };


    return (
        <div>
            <h2>| Please add your valuable experience </h2>
            <form action="#" style={{ border: "1px solid black", padding: "2rem" }}  onSubmit={formik.handleSubmit}>
                <label htmlFor="userName">Username</label>
                <br />
                <input type="text" name="userName" id="userName" style={inputStyle}  onChange={formik.handleChange} value={formik.values.userName} />
                {formik.errors.userName ? <div style={{color: "#b30000"}}>{formik.errors.userName}</div> : null}
                <br />
                <br />
                <label htmlFor="review">Review</label>
                <br />
                <textarea name="review" id="review" cols="30" rows="10" style={inputStyle}  onChange={formik.handleChange} value={formik.values.review}></textarea>
                {formik.errors.review ? <div style={{color: "#b30000"}}>{formik.errors.review}</div> : null}
                <br />
                <br />
                <label htmlFor="rating" >Rating: </label>
                &nbsp;&nbsp;
                <input type="range" name="rating" id="rating" step={1} max={5} min={0}  onChange={formik.handleChange} value={formik.values.rating}/>
                {formik.errors.rating ? <div style={{color: "#b30000"}}>{formik.errors.rating}</div> : null}
                <br />
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}


export default CommentCreateBox;