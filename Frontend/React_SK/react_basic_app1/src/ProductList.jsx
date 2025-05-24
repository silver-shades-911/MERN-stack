import Product from "./Product.jsx";

function ProductList() {
  let option1 = ["Hi-tech", "Powerful", "Battery", "Screen"]; // Array
  let option2 = {    // Object
    a: "Metal",
    b: "aluminum Frame",
    c: "plastic back",
  };
  let ListStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent:"flex-start",
    alignItems: "center"

  }
  return (
    <div style={ListStyle}>
      <Product Title="iPhone with Array" Price="30000" features={option1} />
      {/* <Product Title="Macbook with Object" Price={90000} features={option2.a} /> */}
      <Product
        Title="Ipad with Array direct"
        Price={50000}
        features={["Super Build quality", "Power Efficent", "Fashionable"]}
      />
      <Product />
    </div>
  );
}

/* 
  *----------- BEST PRACTICES -------------
  - If you want to display multiple componets , Always wrap them into 1 bigger Component (Not only in App.js in all scenarios)
    TODO - This help to build Hierarchy
  - For wraping use empty tags <> </>

  * PROPES
  - Title = "iphone"  They are like passing arguments in function
  - For Number data type , Recommanded to use { 90000 } Curly Brackets while passing value
 
*/

export default ProductList;
