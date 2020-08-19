import React from 'react';
import './ControlPanel.css';
import Main from '../Main/Main';
import Chat from '../Chat/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from '../SideBar/SideBar'
import CharacterSheetMain from '../CharacterSheetMain/CharacterSheetMain';

const App = () => {
    return (
        <div className="controlPanelWrapper">
            <SideBar />
            <Main />
        </div>
    );
}

export default App;