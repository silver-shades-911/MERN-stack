import "./Product.css";


function Product() {
  return<div className="Product"> 
    <h3>Title</h3>
    <h6>This is product description</h6>
  </div>;
}

/* 
  - Use same name as Component for css file and that component identifier (className, id) -- Because we follow standardization
  - At component creating level dont use empty tags <> </>, beacuse we want here Title & Description should be in Div
*/

export default Product;