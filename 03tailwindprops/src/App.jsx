import { useState } from "react";
import Footer from "./Footer";
import Content from "./Content";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Card from "./components/Card";
function App() {

  let shoes = [
    {shoesName: "NIKE",btnText: "Kharidle"},
    {shoesName: "PUMA",btnText: "Purchase"},
    {shoesName: "CAMPUS",btnText: "Bhikari"}
  ];

  return (
    <>
      <h1 className="text-mint-500 text-try animate-pulse text-center items-center flex justify-center object-center">
        Hello
      </h1>
      {/* {shoes.map((details,index)=>(
        <Card key={index} {...details} />
      ))} */}
      <Card shoesName="NIKE" btnText="Garib" />
    </>
  );
}

export default App;
