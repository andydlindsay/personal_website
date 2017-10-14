import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';
import './FeaturedProjects.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';
import _ from 'lodash';

class FeaturedProjects extends Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    style = {
        height: 'auto',
        textAlign: 'center'
    }

    renderProjects() {
        return _.map(this.props.projects, project => {
            return (
                <Grid item xs={12} md={6} key={ project.title }>
                    <Paper zDepth={0} className="project">
                        <a 
                            href={ project.links.project } target="_blank"
                            title={ project.title }
                        >
                            <img src={ project.screenshots[0].url } alt={ project.title } />
                        </a>
                    </Paper>
                </Grid>
            );
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="FeaturedProjects">
                    <a name="featured-projects"><span></span></a>
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
                            { this.renderProjects() }
                        </Grid>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
    
}

function mapStateToProps({ projects }) {
    return { projects };
}

export default connect(mapStateToProps, { fetchProjects })(FeaturedProjects);
