import React, { Component } from 'react';
import './Footer.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import BottomNavigation, { BottomNavigationButton } from 'material-ui-next/BottomNavigation';

class Footer extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="Footer">
                    <BottomNavigation value="" showLabels>
                        <BottomNavigationButton
                            label="Codepen"
                            icon={<i className="fa fa-codepen fa-2x"></i>}
                        />
                        <BottomNavigationButton
                            label="LinkedIn"
                            icon={<i className="fa fa-linkedin fa-2x"></i>}
                        />
                        <BottomNavigationButton
                            label="Github"
                            icon={<i className="fa fa-github fa-2x"></i>}
                        />
                    </BottomNavigation>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Footer;
