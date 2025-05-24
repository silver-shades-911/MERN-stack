
import ProductPrice from "./ProductPrice";

export default function ProductCard({ProductTitle, idx}) {
    let oldPrices = ["12,344", "11,909", "1,599", "567"];
    let newPrices = ["11,900", "7,900", "670", "350"];
    let features = [["8,000 DPI", "5 Programmable buttons"], ["Intuitive touch surface", "Designed for iPad Pro"], ["Intuitive touch surface", "Designed for iPad Pro"], ["wireless Mouse 2.4GHz", "Optical Orientation"]];

    let cardStyle = {
        position: "relative",
        height: "11.5rem",
        width: "20rem",
        border: "2px solid",
        borderRadius: "1rem"
    }
    return <div style={cardStyle}>
        <h4>{ProductTitle}</h4>
        <p>{features[idx].map(
            (feature) => { return <li>{feature}</li> }
        )}</p>
        <ProductPrice oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}
        />
    </div>;
}

/* 

  * This is not actual core of component, is is just wrapping component

  * IMP POINT
  - To assign values / give argument to functions
    we can only give values from 1 Above level or that level in hierarchy where the level at Component is build

    ProductPrice --> ProductCard --> ProductCardTray

    (Price Comp           |                |
     Build )              |              (We cannot assign Price values from this level)
                          | 
                          | 
                 ( We can assign Price from here only)


                                              |
  - similar for ProductTitle  ----------------|
    we assign from 1 Upper level (ProductionCardTray) 

  - Features
    we assign from that same level 


*/        