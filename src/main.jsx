import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// const arr = ['HTML', 'CSS', 'JS', 'REACT'];
// const data = arr.map((el) => <li key={el}>{el}</li>);
// const display = <ul>{data}</ul>;
// const alerta = () => alert('Good job');

// const style = {
//   color: 'blue',
//   backgroundColor: 'black',
//   width: '200px',
// };

// const test = (
//   <div>
//     <h2 style={style}>Press that</h2>
//     <button onClick={alerta}>Click me</button>
//   </div>
// );

// const inputs = [
//   {
//     type: 'text',
//     name: 'name',
//     placeholder: 'Nombre',
//   },
//   {
//     type: 'text',
//     name: 'email',
//     placeholder: 'Email',
//   },
//   {
//     type: 'password',
//     name: 'password',
//     placeholder: 'Contrasenia',
//   },
// ];

// const inp = inputs.map((el) => <input key={el.name} {...el}></input>);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
