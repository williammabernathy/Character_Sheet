import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BiArrowToLeft, BiTransferAlt, BiBookContent, BiMessageDetail } from 'react-icons/bi';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'

class SideBar extends React.Component {
    constructor() {
        super();

        this.state = {
            collapsed: false,
            rtl: false
        };

        this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
        this.handleRTLToggle = this.handleRTLToggle.bind(this);
    }

    // set the state to change if sidebar is toggled or not
    handleCollapseToggle(collapsed) {
        collapsed = this.state.collapsed    // convert from bound object to string

        if(collapsed === false)             // swap (toggle) value on click
        {
            collapsed = true;
        }
        else {
            collapsed = false;
        }

        this.setState({ collapsed });       // set state call to update sidebar
    }

    // set the state to change sidebar position from right to left or opposite
    handleRTLToggle(rtl) {
        rtl = this.state.rtl    // convert from bound object to string

        if(rtl === false)             // swap (toggle) value on click
        {
            rtl = true;
        }
        else {
            rtl = false;
        }

        this.setState({ rtl });
    }

    /*
        render
    */
    render() {
        return (
            <div className="sideBarWrapper">
                <ProSidebar collapsed={this.state.collapsed} rtl={this.state.rtl}>

                    <SidebarContent>
                        <Menu iconShape="circle">
                            <MenuItem icon={<BiArrowToLeft />} onClick={this.handleCollapseToggle}>
                                Minimize Sidebar
                            </MenuItem>
                            <MenuItem icon={<BiTransferAlt />} onClick={this.handleRTLToggle}>
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