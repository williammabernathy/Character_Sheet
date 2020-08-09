import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props);

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
                                <ToggleButton className="sidebarToggleButton"
                                    type="checkbox"
                                    variant="secondary"
                                    checked={this.state.collapsed}
                                    onChange={(e) => this.handleCollapseToggle(e.currentTarget.checked)}>
                                    Minimize Sidebar
                                    </ToggleButton>
                            </MenuItem>
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
    }
};

export default SideBar;