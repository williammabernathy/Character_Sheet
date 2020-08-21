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
        <div className="sidebarWrapper">
          <SideBar />
        </div>

        <div className="contentWrapper">
          <Switch>
            <Route exact path={`${match.path}/`} component={Main}></Route>
            <Route path={`${match.path}/charactersheet`} component={CharacterSheetMain}></Route>
            <Route path={`${match.path}/chat`} component={Chat}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default ControlPanel;
