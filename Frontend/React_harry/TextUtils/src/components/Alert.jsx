

export default function Alert({alert}) {

// To show first letter capital

function capitalizer(word) {

    let newWord = word.toLowerCase();
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    return newWord;

}


    return(
        alert && <div class={`alert alert-${alert.type} fade show`} role="alert">
        <strong>{capitalizer(alert.type)}</strong> : {alert.msg}
        </div>
    );
}


/*

* Hack

issue - Due to initially our alert object is null it show error 
solution - to fix that we use this hack 
           alert && <div class...
*/