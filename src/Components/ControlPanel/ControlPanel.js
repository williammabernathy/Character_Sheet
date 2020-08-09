import React from 'react';
import './ControlPanel.css';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar'

const App = () => {
    return (
        <div className="controlPanelWrapper">
            <SideBar />
            <Main />
        </div>
    );
}

export default App;