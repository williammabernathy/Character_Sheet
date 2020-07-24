import React from 'react';
import './App.css';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar'

const App = () => {
  return (
    <div className="appWrapper">
      <SideBar></SideBar>
      <Main></Main>
    </div>
  );
}

export default App;
