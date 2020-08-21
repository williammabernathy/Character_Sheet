import React from "react";
import "./ControlPanel.css";
import Main from "../Main/Main";
import Chat from "../Chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import CharacterSheetMain from "../CharacterSheetMain/CharacterSheetMain";

const App = () => {
  return (
    <div className="controlPanelWrapper">
      <Router>
        <SideBar />

        <Switch>
          <Route exact path="/controlpanel/main" component={Main}></Route>
          <Route exact path="/controlpanel/chat" component={Chat}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
