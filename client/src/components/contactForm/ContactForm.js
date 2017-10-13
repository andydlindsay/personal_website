import React, { Component } from 'react';
import './ContactForm.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from '../../styles/myTheme';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { createMessage } from '../../actions';
import { Field, reduxForm } from 'redux-form';
import Snackbar from 'material-ui/Snackbar';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snackbarOpen: false
        }
    }

    styles = {
        paperStyle: {
            height: 'auto',
            textAlign: 'center'
        }
    }

    onSubmit(values) {
        this.props.createMessage(values, () => {
            this.setState({
                snackbarOpen: true
            });
            this.props.reset();
        });
    }

    handleRequestClose = () => {
        this.setState({
            snackbarOpen: false
        });
    };

    renderField(field) {
        const styles = {
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
        const { meta: { touched, error }, multiLine, rows, label } = field;
        const errorText = `${touched && error ? error : ''}`;
        const numRows = multiLine ? rows : 1;
        const isMultiLine = multiLine ? true : false;
        return (
            <TextField
                floatingLabelFixed={true}
                floatingLabelText={label}
                fullWidth={true}
                style={styles.textFieldStyle}
                underlineStyle={styles.underlineStyle}
                underlineFocusStyle={styles.underlineFocusStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                errorText={errorText}
                multiLine={isMultiLine}
                rows={numRows}
                {...field.input}
            />
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div className="ContactForm">
                    <a name="contact-me"><span></span></a>
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
                                <form 
                                    className="contact-form"
                                    name="MessagesNewForm"
                                    onSubmit={
                                        handleSubmit(this.onSubmit.bind(this))
                                    }
                                >
                                    <Field
                                        props={{
                                            label: 'Name'
                                        }}
                                        name='name'
                                        component={this.renderField}
                                    />
                                    <br />
                                    <Field
                                        props={{
                                            label: 'Email'
                                        }}
                                        name='email'
                                        component={this.renderField}
                                    />
                                    <br />
                                    <Field
                                        props={{
                                            label: 'Message',
                                            multiLine: true,
                                            rows: 3
                                        }}
                                        name='message'
                                        component={this.renderField}
                                    />
                                    <br />
                                    <RaisedButton 
                                        label="Submit"
                                        type="submit"
                                        secondary={true}
                                        fullWidth={true}
                                    />
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Snackbar
                        open={this.state.snackbarOpen}
                        message="Message submitted. Thank you!"
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
    
}

function validate(values) {
    // console.log('values:', values);
    const errors = {};

    if (!values.name) {
        errors.name = 'Please enter your name.';
    }

    if (!values.email) {
        errors.email = 'Please enter a valid email address.';
    }

    if (!values.message || values.message.length < 25) {
        errors.message = 'Please enter a message that is at least 25 characters long.';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'MessagesNewForm'
})(connect(null, { createMessage })(ContactForm));
