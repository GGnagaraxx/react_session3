import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import { ContactNumValidation, DoBValidation, EmailValidation, isInputEmpty, NameValidation } from "../functions/Validator";
import DateField from "./DateField";


class UserForm extends React.Component {

    state = {
        userInput: {
            name: '',
            dob: new Date(),
            email: '',
            contactNum: '',
            desc: ''
        },
        errors: {
            name: false,
            dob: false,
            email: false,
            contactNum: false,
            desc: false
        },
    }

    checkValidation = (input, inputType) => {

        return new Promise((resolve, reject) => {
            let resp
            let error = false;
            let isValid = true;

            if (inputType == 'name') {
                resp = NameValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'dob') {
                resp = DoBValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'email') {
                resp = EmailValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'contactNum') {
                resp = ContactNumValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'desc') {
                resp = isInputEmpty(input);
                if (resp) {
                    error = 'Description is Required';
                    isValid = false;
                } else {
                    error = false;
                }
            }

            this.setState({
                ...this.state,
                userInput: {
                    ...this.state.userInput,
                    [inputType]: input,
                },
                errors: {
                    ...this.state.errors,
                    [inputType]: error,
                },
            })

            resolve(isValid);
        })

    }

    handleChange = (e) => {
        const input = e.target.value;
        const inputType = e.target.name;

        this.checkValidation(input, inputType)
    }

    handleDateChange = (dateValue) => {
        const d = new Date(dateValue);

        this.checkValidation(d, 'dob');
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        if (!await this.checkValidation(this.state.userInput.name, 'name')) valid = false;
        if (!await this.checkValidation(this.state.userInput.dob, 'dob')) valid = false;
        if (!await this.checkValidation(this.state.userInput.email, 'email')) valid = false;
        if (!await this.checkValidation(this.state.userInput.contactNum, 'contactNum')) valid = false;
        if (!await this.checkValidation(this.state.userInput.desc, 'desc')) valid = false;

        console.log("Valid: ", this.state.userInput);
        this.props.addUser(this.state.userInput);
        this.setState({
            userInput: {
                name: '',
                dob: new Date(),
                email: '',
                contactNum: '',
                desc: ''
            },
            errors: {
                name: false,
                dob: false,
                email: false,
                contactNum: false,
                desc: false
            },
        })
    }

    render() {
        return (
            <Box component="div" className="cust-box p-2 m-2">
                <Typography
                    gutterBottom
                    className="txt-center comp-title"
                    variant='h3'
                    component='div'>
                    Add User
                </Typography>
                <Form onSubmit={this.handleSubmit}>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <TextField
                                    className="m-1 fw"
                                    id="outlined-name"
                                    name="name"
                                    label="Name"
                                    placeholder="Enter your name"
                                    required
                                    error={this.state.errors.name ? true : false}
                                    helperText={this.state.errors.name ? this.state.errors.name : null}
                                    value={this.state.userInput.name}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col xl={6} lg={12} xs={6}>
                                <DateField
                                    className="m-1 fw"
                                    id="outlined-name"
                                    name="dob"
                                    label='Date of Birth'
                                    required
                                    error={this.state.errors.dob ? true : false}
                                    helperText={this.state.errors.dob ? this.state.errors.dob : null}
                                    value={this.state.userInput.dob}
                                    handleDateChange={this.handleDateChange}
                                />
                            </Col>
                            <Col xl={6} lg={12} xs={6}>
                                <TextField
                                    className="m-1 fw"
                                    id="outlined-name"
                                    name="contactNum"
                                    label="Contact Number"
                                    placeholder="Enter your number"
                                    inputProps={{ maxLength: 10 }}
                                    required
                                    error={this.state.errors.contactNum ? true : false}
                                    helperText={this.state.errors.contactNum ? this.state.errors.contactNum : null}
                                    value={this.state.userInput.contactNum}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col xs={12}>
                                <TextField
                                    className="m-1 fw"
                                    id="outlined-name"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    required
                                    error={this.state.errors.email ? true : false}
                                    helperText={this.state.errors.email ? this.state.errors.email : null}
                                    value={this.state.userInput.email}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col xs={12}>
                                <TextField
                                    className="m-1 fw"
                                    id="outlined-name"
                                    name="desc"
                                    label="Description"
                                    placeholder="Tell me about yourself"
                                    multiline
                                    inputProps={{ maxLength: 500 }}
                                    minRows={5}
                                    maxRows={5}
                                    required
                                    error={this.state.errors.desc ? true : false}
                                    helperText={this.state.errors.desc ? this.state.errors.desc : null}
                                    value={this.state.userInput.desc}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col className="center" xs={12}>
                                <Button
                                    type='submit'
                                    className="submit-btn m-2"
                                    variant="contained">Add</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Box>
        )
    }
}

export default UserForm;