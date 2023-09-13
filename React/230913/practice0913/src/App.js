function App() {
  const time = new Date();
  return (
    <div style={{backgroundColor:"black", color:"white"}}>
      <h1 style={{color:"red"}}>
        년 : {time.getFullYear()}
      </h1>
      <h1 >
        월/일 : {time.getMonth()+1}/{time.getDate()}
      </h1>
      <h1>
        시간 : {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초
      </h1>
    </div>
  );
}
export default App;
