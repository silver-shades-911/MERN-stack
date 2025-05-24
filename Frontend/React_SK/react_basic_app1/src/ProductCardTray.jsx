import ProductCard from "./ProductCard";

export default function ProductCardTray () {
    
    let Tray = {
        width: "100%",
        height: "12rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    }

    return <div style={Tray}>
       
        <ProductCard  ProductTitle="Logitech MX Master 3S" idx={0}/>
        <ProductCard  ProductTitle="Apple Pencil (2nd Gen)" idx={1}/>
        <ProductCard  ProductTitle="Zebronic Zeb-Transformer" idx={2}/>
        <ProductCard  ProductTitle="Portonic Toad 23 Mouse" idx={3}/>
    </div>;
}