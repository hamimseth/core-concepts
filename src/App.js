// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const person = {
//     name: 'Dr. MahfuZ',
//     job: 'singer'
//   }
//   const person2 = {
//     name: 'Eva Rahman',
//     job: 'kakoli kandi'
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1>I'm a react person</h1>
//       <p>Name: {person.name} {person.job}  </p>
//       <p>Name: {person2.name} {person2.job}</p>

//       </header>
//     </div>
//   );
// }

// export default App;

// the end------------------------------------->

// import React from 'react';
// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Person></Person>
//         <Person></Person>
//         <Person></Person>
//         <Person></Person>

//       </header>
//     </div>
//   );
// }
// function Person() {
//   const style={
//     border: '2px solid red',
//     margin: '10px',
//     padding: '5px'
//   }
//   return (
//     <div style={{border: '2px solid green', margin: '10px'}}>
//       <h2>Sakib Al Hasan</h2>
//       <p>Hero of the year</p>
//     </div>
//   )
// }

// export default App;

// the end----------------------------------->

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const cbmMember = ['hamim', 'tuba', 'Torsha', 'shezan', 'anik', 'mahmud'];
const products = [
  {name: 'PhotoShop', price: '$59.99'},
  {name: 'Illustrator', price: '$49.99'},
  {name: 'PDF Reader', price: '$17.99'}
]

return (
    <div className="App">
      <header className="App-header">
        <h1>Coffee Books & More</h1>
        <Counter></Counter>
        <Profile></Profile>
        <ul>
          {
            cbmMember.map(member =><li>{member}</li>)
          }
          {
            products.map(pd =><li>{pd.name}</li>)
          }
          {
            products.map(pd =><Product product={pd}></Product> )
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
       <Person name="hamim" level="RU"></Person>
       <Person name="tuba" level="RU"></Person>
       <Person name="torsha" level="AIUB"></Person>
       <Person name="shezan" level="AIUB"></Person>
       <Person name="anik" level="AU"></Person>
       <Person name="anikJr." level="BUTEX"></Person>
      </header>
    </div>
  );
}
// function Counter() {
//   const [count, setCount] = useState(10)
//     return(
//       <div>
//         <h1>Count:{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increase</button>
//         <button onClick={()=>setCount(count-1)}>Decrease</button>
//       </div>
//     )
// }

function Counter(){
  const [count, setCount] = useState(0)
  // const handleControral = () =>setCount(count+1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button><br/>
      <button onClick={() =>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Profile(){
  const [users, SetUsers] = useState([]);

  useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => SetUsers(data));
}, []);
  return(
    <div>
      <h1>Profile:{users.length}</h1>
      <ul>
      {
        users.map(user =><li>{user.email}</li>)
      }
      </ul>
    </div>
  )
  
}
function Product(props){
  const productStyle = {
    border: "1px solid gray",
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    flat:'left'
  }
  const{name, price} = props.product
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
function Person(props){
  return(
    <div style={{border: '1px solid yellow', margin:'10px'}}>
      <h2>My name is {props.name}</h2>
      <p>University: {props.level}</p>
    </div>
  )
}

export default App;