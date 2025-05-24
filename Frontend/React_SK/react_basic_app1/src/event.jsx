/* 
  * Event Object
  - This is a object that we pass as parameter in event handlers. 
    This object contains details about the event, such as the event type, target element, mouse position, key pressed, etc.
    Pre-build methods e.g. event.preventDefault()
*/

function handleFormSubmit(event) { // This "event object pass & use in event handler function "
    event.preventDefault();
    console.log("Form is submitted");
    console.log(event);
}

export default function FormWithEvent() {

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Enter Text"/>
            <button type="submit">Submit</button>
        </form>
    );
};