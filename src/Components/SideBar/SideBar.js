import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'

class SideBar extends React.Component {
    constructor() {
        super();

        this.state = {
            collapsed: false
        };

        this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
    }

    // set the state to change if sidebar is toggled or not
    handleCollapseToggle(collapsed) {
        this.setState({ collapsed });
    }

    /*
        render
    */
    render() {
        return (
            <div className="sideBarWrapper">
                <ProSidebar collapsed={this.state.collapsed}>

                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem>
                                Minimize Sidebar<br/>
                                <Switch className="sidebarToggleButton"
                                    variant="secondary"
                                    checked={this.state.collapsed}
                                    onChange={this.handleCollapseToggle}/>
                            </MenuItem>
                            <MenuItem>
                                Character Sheet
                                {/*<Link to="controlpanel/charactersheet"/>*/}
                            </MenuItem>
                            <MenuItem>
                                Chat
                                {/*<Link to="controlpanel/chat"/>*/}
                            </MenuItem>
                        </Menu>
                    </SidebarContent>

                </ProSidebar>
            </div>
        );
    }
};

export default SideBar;