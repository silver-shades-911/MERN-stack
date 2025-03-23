import Product from "./Product.jsx";


function ProductList () {
    return <>
    <Product />
    <Product/>
    <Product/>
    </>;
}

/* 
  *----------- BEST PRACTICES -------------
  - If you want to display multiple componets , Always wrap them into 1 bigger Component (Not only in App.js in all scenarios)
    TODO - This help to build Hierarchy
  - For wraping use empty tags <> </>
 
*/

export default ProductList;