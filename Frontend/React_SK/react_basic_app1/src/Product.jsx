import "./Product.css";

// function Product( Propes ) {
//   return<div className="Product">
//     <h3>{Propes.Title}</h3>
//     <h6>Price: {Propes.Price / 2 }</h6>
//   </div>;
// }

function Product({ Title = "Default Value", Price = 5000, features = [] }) {
  // Using Destructure syntax to access key directly | We can assign Default values
  let ourStyle = { backgroundColor: Price > 30000 ? "pink" : "lightBlue" }; // * Dynamic Component Styling, we apply styling with conditions
  return (
    <div className="Product" style={ourStyle}>
      <h3>{Title}</h3>
      <h6>Price: {Price / 2}</h6>
      <p>
        Features:
        {features.map(function (feature) {
          return <li>{feature}</li>;
        })}
      </p>
      {Price > 30000 ? <p> Discount is 5% </p> : null}
    </div>
  );
}

/* 
  * BEST PRACTICES
  - Use same name as Component for css file and that component identifier (className, id) -- Because we follow standardization
  - At component creating level dont use empty tags <> </>, beacuse we want here Title & Description should be in Div

  * PROPES 
  - They are similar to Parameters in function , help to assign values dynamically
  - It is a JS object

  * PROPES ARRAY
  - We prepered above method to render arrays  

  * CONDITIONALS
  - { Price > 30000 ? <p> Discount is 5% </p> : null} We prefered creating HTML element only if value exits, otherwise if null values are their, it create useless HTML elements (empty)
  ! Avoid this kind syntax
   <p> { Price > 20000 ? "Discount is 5%" : ""} </p>  --> create empty elemnts 
*/

export default Product;
