// import './App.css';
// import styled from 'styled-components'
// import Header from './components/header';
// import MemeIntro from './components/memeIntro';

// function App() {
//   return (
//     <Container>
//       <Header />
//       <MemeIntro />
//     </Container>

//   );
// }

// const Container = styled.div`
//   height: 100vh;
//   /* width: 80%;
//   margin: auto; */

//   @media (max-width: 768px){
//     background-color: blue;
//     width: 100%;
//   }
// `

// export default App;

import React, { Component } from 'react';
import MainPage from './components/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <MainPage />
    );
  }
}

export default App;

