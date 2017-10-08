import React, { Component } from 'react';
import './NavigationBar.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class NavigationBar extends Component {
    render() {
        return (
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
        );
    }
}

export default NavigationBar;
