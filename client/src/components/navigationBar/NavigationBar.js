import React, { Component } from 'react';
import './NavigationBar.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import AppBar from 'material-ui/AppBar';
// import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const NavMenu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Projects" href="#featured-projects"/>
        <MenuItem primaryText="Contact Me" href="#contact-me"/>
    </IconMenu>
);

class NavigationBar extends Component {
    styles = {
        titleStyle: {
            color: myTheme.palette.textColor
        }
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="NavigationBar">
                    <AppBar 
                        title={<span style={this.styles.titleStyle}>Andy Lindsay</span>}
                        zDepth={0}
                        showMenuIconButton={false}
                        iconElementRight={<NavMenu />}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default NavigationBar;
