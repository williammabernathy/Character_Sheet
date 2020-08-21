import React from "react";
import "./ControlPanel.css";
import Main from "../Main/Main";
import Chat from "../Chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import CharacterSheetMain from "../CharacterSheetMain/CharacterSheetMain";

const ControlPanel = ({ match }) => {
  return (
    <div className="controlPanelWrapper">
      <Router>
        <SideBar />

        <Switch>
          <Route path={`${match.path}/main`} component={Main}></Route>
          <Route path={`${match.path}/chat`} component={Chat}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default ControlPanel;
