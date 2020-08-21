import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { BiArrowToLeft, BiTransferAlt, BiBookContent, BiMessageDetail } from 'react-icons/bi';
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
        console.log("collapsed = " + collapsed);
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
                        <Menu iconShape="circle" onClick={this.handleCollapseToggle}>
                            <MenuItem icon={<BiArrowToLeft />} onClick={this.handleCollapseToggle}>
                                Minimize Sidebar
                            </MenuItem>
                            <MenuItem icon={<BiTransferAlt />}>
                                RightToLeft
                            </MenuItem>
                            <MenuItem icon={<BiBookContent />}>
                                Character Sheet
                                <Link to="/controlpanel/charactersheet" />
                            </MenuItem>
                            <MenuItem icon={<BiMessageDetail />}>
                                Chat
                                <Link to="/controlpanel/chat" />
                            </MenuItem>
                        </Menu>
                    </SidebarContent>

                </ProSidebar>
            </div>
        );
    }
};

export default SideBar;