import React, { Component } from 'react';
import './FeaturedProjects.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';

class FeaturedProjects extends Component {
    style = {
        height: 'auto',
        textAlign: 'center'
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="FeaturedProjects">
                    <Paper 
                        style={this.style}
                        zDepth={0}
                    >
                        <Grid
                            container
                            spacing={0}
                            align={'center'}
                            justify={'center'}
                        >
                            <Grid item xs={12}>
                                <span className="headline2">PROJECTS</span>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper zDepth={0} className="project">
                                    <img src="https://s3.amazonaws.com/andydlindsay-portfolio/recipe+box/recipe+box+home+cropped.png" alt="recipe box app" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper zDepth={0} className="project">
                                    <img src="https://s3.amazonaws.com/andydlindsay-portfolio/game+of+life/game+of+life+cropped.png" alt="game of life app" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper zDepth={0} className="project">
                                    <img src="https://s3.amazonaws.com/andydlindsay-portfolio/calculator/calculator.png" alt="calculator app" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper zDepth={0} className="project">
                                    <img src="https://s3.amazonaws.com/andydlindsay-portfolio/tic+tac+toe/tic+tac+toe+cropped.png" alt="tic tac toe app" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper zDepth={0} className="project">
                                    <img src="https://s3.amazonaws.com/andydlindsay-portfolio/pomodoro/pomodoro+cropped.png" alt="pomodoro timer app" />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper zDepth={0} className="project">
                                    <img src="https://s3.amazonaws.com/andydlindsay-portfolio/simon/simon+cropped.png" alt="simon game" />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default FeaturedProjects;
