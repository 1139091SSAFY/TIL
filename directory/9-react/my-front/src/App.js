// import React, { Component } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Header from './components/Header.js';
// import Main from './components/Main.js';
// import Product from './components/Product.js'
// import Footer from './components/Footer.js';
// import NotFound from './components/NotFound.js';

// const App = () => {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Main />}>Main</Route>
//           <Route path="/product/" element={<Product />}>Product</Route>
//           <Route path="*" element={<NotFound />}></Route>
//         </Routes>
//       </BrowserRouter>

//       <Footer />
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////
// import React, { useState } from 'react';

// const Say = () => {
//   const [message, setMessage] = useState('');
//   const onClickEnter = () => setMessage('안녕하세요!');
//   const onClickLeave = () => setMessage('안녕히 가세요!');

//   const [color, setColor] = useState('black');

//   return (
//     <div>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1 style={{ color }}>{message}</h1>

//       <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
//       <button style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
//       <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
//     </div>
//   );
// };

// export default Say;

// import EventPractice from "./src/EventPractice";

// const App = () => {
//   return (
//     <EventPractice />
//   );
// }

// export default App;

// import React from "react";
// import ValidationSample from "./src/ValidationSample";

// const App = () => {
//   return <ValidationSample />;
// };

// export default App;

///////////////////////////////////////////////////////////////
// import React, { Component } from "react";
// import ScrollBox from "./src/ScrollBox";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import IterationSample from "./src/IterationSample";

class App extends Component {
  render() {
    return <IterationSample />;
  }
}

export default App;
