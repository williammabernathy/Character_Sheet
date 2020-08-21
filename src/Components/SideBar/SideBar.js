import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BiArrowToLeft, BiTransferAlt, BiBookContent, BiMessageDetail } from 'react-icons/bi';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'

const SideBar = () => {
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    // set the state to change if sidebar is toggled or not
    const handleCollapseToggle = () => {
        if (collapsed === false)            
        {
            setCollapsed(true);
        }
        else {
            setCollapsed(false);
        }
    }

    // set the state to change sidebar position from right to left or opposite
    const handleRTLToggle = () => {
        if (rtl === false)           
        {
            setRtl(true);
        }
        else {
            setRtl(false);
        }
    }

    /*
        render
    */
    return (
        <div className="sideBarWrapper">
            <ProSidebar collapsed={collapsed} rtl={rtl}>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<BiArrowToLeft />} onClick={() => handleCollapseToggle()}>
                            Minimize Sidebar
                            </MenuItem>
                        <MenuItem icon={<BiTransferAlt />} onClick={() => handleRTLToggle()}>
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
};

export default SideBar;