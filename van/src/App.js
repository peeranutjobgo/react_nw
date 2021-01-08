// import logo from './logo.svg';
import './App.css';
// import Nav from './Nav.js';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Nav from "./props/Nav";
import Viewbook from "./page/Viewbook";
import Home from "./page/Home";
import Error404 from './Error404';
import Createbook from './page/Createbook';
import Addbook from './page/Addbook';

// function App() {
//   return (
//     <div className="App">


//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }




const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/view" component={Viewbook} />
          <Route path="/create" component={Createbook} />
          <Route path="/add/" component={Addbook} />
          <Route path="/" exact={true} component={Home} />
          <Route component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
