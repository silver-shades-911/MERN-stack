export default function Alert({ alert }) {
  // To show first letter capital

  function capitalizer(word) {
    let newWord = word.toLowerCase();
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    return newWord;
  };

  return (
    <div style={{height: "3rem"}}>
        {alert && (
            <div class={`alert alert-${alert.type} fade show`} role="alert">
              <strong>{capitalizer(alert.type)}</strong> : {alert.msg}
            </div>
        )}  
    </div>
    
  );
}

/*

* Hack

issue - Due to initially our alert object is null it show error 
solution - to fix that we use this hack 
           alert && <div class...


! Important Point

  -->  <div style={{height: "3rem"}}>  we give alert some space 
  bcz without is when invoke it do CLS (Comulative Layout Shift) it is a problem , not recommanded by Google WebMaster
*/
