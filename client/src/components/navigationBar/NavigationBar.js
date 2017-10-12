import React, { Component } from 'react';
import './NavigationBar.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

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
                        showMenuIconButton={false}
                        zDepth={0}
                        iconElementRight={
                            <div>
                                <FlatButton
                                    label="Projects"
                                    className="nav-item"
                                    href="#featured-projects"
                                />
                                <FlatButton
                                    label="Contact Me"
                                    className="nav-item"
                                    href="#contact-me"
                                />
                            </div>
                        }
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default NavigationBar;
