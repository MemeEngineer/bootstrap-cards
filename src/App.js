import React from "react";
import "./styles.css";
//import card1
import Card from "./components/Card";
// import Card2 from "./components/Card2";
import cardsArr from "./data.js"

// const cards = cardsArr.map((ele, index) => {
//   return (
//     <Card
//       img={ele.img}
//       title={ele.title}
//       text={ele.text}
//       url={ele.url}
//       key={index}
//       />
//   );
// })
const cards = cardsArr.map((ele, index) => {
  return (
    <Card
    //typescript
      {...ele}
      key={index}
      />
  );
})


export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 />
        <Card2 /> */}
      </section>
    </div>
  );
}

