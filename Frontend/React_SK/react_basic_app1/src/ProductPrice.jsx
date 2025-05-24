export default function ProductPrice({ oldPrice, newPrice }) {
  let oldPriceStyle = {
    textDecorationLine: "line-through",
  };

  let newPriceStyle = {
    fontWeight: "500",
  };

  let PriceStyle = {
    width: "100%",
    height: "29%",
    backgroundColor: "Gold",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
    lineHeight: "3rem"
  };
  return (
    <div style={PriceStyle}>
      <span style={oldPriceStyle}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span style={newPriceStyle}>{newPrice}</span>
    </div>
  );
}

/* 
  * TIP 
    - Start Building with static values ,it make vision clear
  * POINT
    - This is actual core of component, here values (parameters) are pass and set their location
  * 
*/
