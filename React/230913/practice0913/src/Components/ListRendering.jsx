import React from 'react'
import "./ListRendering.css"


export default function ListRendering() {
  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];
function ListItem(){
  return(
    list.map((item)=>{
      return <li style={{border:"1px solid black" }} className = {item.visited ? "visited" : ""}>{item.area}</li>
    })
  )
}
  return (
    <>
      <ul style={{listStyle:"none"}}>
        <ListItem/>
      </ul>
    </>
  )
}
