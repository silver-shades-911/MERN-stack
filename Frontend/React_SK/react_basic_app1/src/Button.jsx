//* onClick Event Handlers && Non- clickable Event Handling

function handleClick() {
  console.log("Hello World");
}

function handleMouseOver() {
  console.log("bye!");
}

function doubleClickHandling(){
    console.log("You double clicked");
}

function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onMouseOver={handleMouseOver}>
        ~~~~[Hover Me]~~~~Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
        doloribus? Blanditiis minus, maiores obcaecati natus perferendis quos
        aspernatur accusamus eos, architecto temporibus voluptatibus hic
        reiciendis laudantium impedit excepturi, maxime vero? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Doloremque illo quisquam
        consequuntur excepturi eveniet mollitia deserunt vitae tempora esse,
        animi incidunt quibusdam labore facere. Molestiae porro cum nesciunt
        perspiciatis in?
      </p>
      <button onDoubleClick={doubleClickHandling}>Double Click Me</button>
    </div>
  );
}

export default Button;
