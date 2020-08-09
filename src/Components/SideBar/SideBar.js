import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sideBarWrapper">
            <ProSidebar>

                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem>Toggle</MenuItem>
                        <MenuItem>Stuff 2</MenuItem>
                        <MenuItem>Stuff 3</MenuItem>
                        <MenuItem>Stuff 4</MenuItem>
                        <SubMenu title="DropDown PH" >
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

            </ProSidebar>
        </div>
    );
};

export default SideBar;