import { useState } from "react";
import Footer from "./Footer";
import Content from "./Content";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Card from "./components/Card";
function App() {
  let someObj = {
    userName: "lovesinghal31",
    age: 18
  }
  
  let arr =[1,2,3,4]


  return (
    <>
      <h1 className="text-mint-500 text-try animate-pulse text-center items-center flex justify-center object-center">
        Hello
      </h1>
      <Card productName="NIKE" btnText="Kharid le" />
      <Card productName="PUMA" btnText="Purchase" />
      <Card />
    </>
  );
}

export default App;
