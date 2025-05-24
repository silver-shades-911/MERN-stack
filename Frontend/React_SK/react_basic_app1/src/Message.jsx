//* SMALL ACIVITY

function Message({username = "unknow", color = "black"}) {
  let textColor = { color: color, backgroundColor: "silver" };
  return (
    <div className="Message" style={textColor }>
      <h4>Hello! {username}</h4>
    </div>
  );
}

export default Message;
