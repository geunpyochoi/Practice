import React from 'react'

export default function Component() {
  function Resume(props){
    return(
      <>
      <h2>{props.hello}</h2>
      <p>취미 : {props.hobby}</p>
      <p>좋아하는 음식 : {props.food}</p>
      <p>좋아하는 색 : <span style={{color:"blue"}}>{props.color}</span></p>
      </>
    )
  }
  return (
    <div style={{border:"1px solid black"}}>
      <h1>개리 자기소개서</h1>
			<Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
    </div>
  )
}
