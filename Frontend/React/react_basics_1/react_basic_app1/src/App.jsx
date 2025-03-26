import "./App.css";
import Title from "./Title.jsx"; // use for import single value from file and can rename also
import { Description, Button } from "./Desc&Button.jsx"; // use for import multiple values from file
import ProductList from "./ProductList.jsx";
import MessageBox from "./MessageBox.jsx";

function App() {
  // Basics
  return (
    <>
      <Title />
      <Description />
      <Button />
      <hr />
      <ProductList />
      <hr />
      <MessageBox />
    </>
  );
}

export default App; // when we want to export single value in file and rename in other file to use

/* 
* ------- PURPOSE -------
  - here, we create small/ medium all type of components and wrap them into App component and export to main.jsx file
  
*/
