import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
// //create the component
// const Card1 = (props) => {
//   return (
//     <div className="card" style={{ width: "18rem" }}>
//       <CardImage />
//       <CardBody title="Santorini"/>
//     </div>
//   );
// };

// //export the component
// export default Card1;

export default function Card({img,text,title,url}) { 
  //  console.log('this is props:', props)
  return (
    <div className="card" style={{width:'18rem'}}>
    <CardImage img={img} />
    <CardBody title={title} text={text} url={url} />
  </div>
  )
}