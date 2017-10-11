import React, { Component } from 'react';
import './ContactForm.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ContactForm extends Component {
    styles = {
        paperStyle: {
            height: 'auto',
            textAlign: 'center'
        },
        underlineStyle: {
            borderColor: myTheme.palette.textColor
        },
        underlineFocusStyle: {
            borderColor: myTheme.palette.textColor
        },
        floatingLabelStyle: {
            color: myTheme.palette.textColor,
            fontSize: '22px'
        },
        floatingLabelFocusStyle: {
            color: myTheme.palette.textColor
        },
        textFieldStyle: {
            textAlign: 'left'
        }
    }

    render() {
        console.log('myTheme:', myTheme);
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="ContactForm">
                    <Paper
                        style={this.styles.paperStyle}
                        zDepth={0}
                    >
                        <Grid
                            container
                            spacing={0}
                            align={'center'}
                            justify={'center'}
                        >
                            <Grid item xs={12}>
                                <span className="headline2">CONTACT ME</span>
                            </Grid>
                            <Grid item xs={12}>
                                <form className="contact-form">
                                    <TextField
                                        floatingLabelFixed={true}
                                        floatingLabelText="Name"
                                        fullWidth={true}
                                        underlineStyle={this.styles.underlineStyle}
                                        underlineFocusStyle={this.styles.underlineFocusStyle}
                                        floatingLabelStyle={this.styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={this.styles.floatingLabelFocusStyle}
                                    /><br />
                                    <TextField
                                        floatingLabelFixed={true}
                                        floatingLabelText="Email"
                                        fullWidth={true}
                                        underlineStyle={this.styles.underlineStyle}
                                        underlineFocusStyle={this.styles.underlineFocusStyle}
                                        floatingLabelStyle={this.styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={this.styles.floatingLabelFocusStyle}
                                    /><br />
                                    <TextField
                                        floatingLabelFixed={true}
                                        floatingLabelText="Message"
                                        fullWidth={true}
                                        multiLine={true}
                                        rows={3}
                                        style={this.styles.textFieldStyle}
                                        underlineStyle={this.styles.underlineStyle}
                                        underlineFocusStyle={this.styles.underlineFocusStyle}
                                        floatingLabelStyle={this.styles.floatingLabelStyle}
                                        floatingLabelFocusStyle={this.styles.floatingLabelFocusStyle}
                                    /><br />
                                    <RaisedButton 
                                        label="Submit"
                                        secondary={true}
                                        fullWidth={true}
                                    />
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ContactForm;
