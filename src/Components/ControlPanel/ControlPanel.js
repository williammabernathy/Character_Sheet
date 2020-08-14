import React from 'react';
import './ControlPanel.css';
//import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar'
import CharacterSheetMain from '../CharacterSheetMain/CharacterSheetMain';

const App = () => {
    return (
        <div className="controlPanelWrapper">
            <SideBar />
            <CharacterSheetMain />
        </div>
    );
}

export default App;