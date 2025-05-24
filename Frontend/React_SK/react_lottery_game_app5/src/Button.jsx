// button

export default function Button({ btnName, actionCallback }) {
  return (
    <span>
      <button onClick={actionCallback}>{btnName}</button>
    </span>
  );
}


// Here we define callback as propes for onClick Event