import React, { Component } from 'react';
import './NavigationBar.css';
import AppBar from 'material-ui/AppBar';

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar">
                <AppBar 
                    title="Andy Lindsay"
                />
            </div>
        );
    }
}

export default NavigationBar;
