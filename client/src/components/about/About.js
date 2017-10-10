import React, { Component } from 'react';
import './About.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';

class About extends Component {
    style = {
        height: 'auto',
        textAlign: 'center'
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="About">
                    <Paper 
                        style={this.style}
                        zDepth={0}
                    >
                        <Grid
                            container 
                            spacing={8} 
                            justify={'center'}
                            align={'center'}
                        >
                            <Grid item xs={12} sm={12} md={6}>
                                <Paper
                                    zDepth={0}
                                    circle={true}
                                    className="darken profile-image"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Paper
                                    zDepth={0}
                                    className="headline1 align-left"
                                >
                                    <span>
                                        Hi, I'm Andy.{"\n"}
                                        I want to help you create amazing things.
                                    </span>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default About;
