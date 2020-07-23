import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './App.css';

function App() {
  return (
    <div style = {{height:"100vh"}}>
      <ProSidebar>
        <SidebarHeader>
          <center>Character Creator</center>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem>Home</MenuItem>
            <SubMenu title="DropDown PH" >
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter>
          <center>Footer</center>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default App;
