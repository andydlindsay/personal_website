import React, { Component } from 'react';
import './NavigationBar.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class NavigationBar extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="NavigationBar">
                    <AppBar 
                        title="Andy Lindsay"
                        showMenuIconButton={false}
                        zDepth={0}
                        iconElementRight={
                            <div>
                                <FlatButton
                                    label="Projects"
                                    className="nav-item"
                                />
                                <FlatButton
                                    label="Contact Me"
                                    className="nav-item"
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
