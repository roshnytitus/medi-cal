import React from 'react';
import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import Navbar from './Navbar';
// import Home from './Home';
import Calendar from './Calendar';
import Sidebar from './Sidebar';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/">
    //       Home
    //     </Route>
    //     <Route path="/calendar">
    //       Calendar
    //     </Route>
    //   </Routes>
    // </BrowserRouter>



    // <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <Sidebar />
    //     <Calendar />
    //     <div className="content">
    //       <Routes>
    //         <Route exact path="/">
    //           {/* <Home /> */}
    //         </Route>
    //         <Route exact path="/calendar">
    //           {/* <Calendar /> */}
    //         </Route>
    //       </Routes>
    //     </div>
    //   </div>
    // </BrowserRouter>



    
    <div className="app">
      <header>
        <h1>September</h1>
        {/* <div className="logo">Your Logo</div> */}
      </header>
      <main>
        <Sidebar />
        <Calendar />
      </main>
    </div>
    

  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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
//       </header>
//     </div>
//   );
// }

// export default App;
