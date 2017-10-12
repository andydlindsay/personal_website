import React, { Component } from 'react';
import './Footer.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import BottomNavigation, { BottomNavigationButton } from 'material-ui-next/BottomNavigation';
import Grid from 'material-ui-next/Grid';
import Paper from 'material-ui/Paper';

class Footer extends Component {
    paperStyles = {
        height: 'auto',
        textAlign: 'center'
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="Footer">
                    <Grid
                        container
                        spacing={0}
                        align={'center'}
                        justify={'center'}
                    >
                        <Grid item xs={12} lg={6}>
                            <Paper
                                style={this.paperStyles}
                                zDepth={0}
                            >
                                <span className="footer-text">Andy is based in Vancouver, Canada</span>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Paper
                                style={this.paperStyles}
                                zDepth={0}
                            >
                                <div className="bottom-navigation">
                                    <BottomNavigation value="" showLabels>
                                        <BottomNavigationButton
                                            label="Codepen"
                                            icon={<i className="fa fa-codepen fa-2x"></i>}
                                            href="https://codepen.io/andydlindsay/"
                                            target="_blank"
                                        />
                                        <BottomNavigationButton
                                            label="LinkedIn"
                                            icon={<i className="fa fa-linkedin fa-2x"></i>}
                                            href="https://www.linkedin.com/in/andy-lindsay-17a9762b/"
                                            target="_blank"
                                        />
                                        <BottomNavigationButton
                                            label="Github"
                                            icon={<i className="fa fa-github fa-2x"></i>}
                                            href="https://github.com/andydlindsay"
                                            target="_blank"
                                        />
                                    </BottomNavigation>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Footer;
