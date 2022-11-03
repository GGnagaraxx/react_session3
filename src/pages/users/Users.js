import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserForm from "../../common/components/UserForm";
import UserList from "./components/UserList";


class Users extends React.Component{

    state = {
        users: [
            {
                name: 'Sample User',
                dob: new Date(),
                email: 'sample.user@sample.com',
                contactNum: '0123456789',
                desc: 'This is just a sample User'
            }
        ]
    }

    addUser = (user) => {
        console.log("User: ", user);

        this.setState({
            users: [
                ...this.state.users,
                user
            ]
        })
    }

    render(){
        return(
            <Container className="users-comp">
                <Row>
                    <Col lg={5} className="center">
                        <UserForm addUser={this.addUser}/>
                    </Col>
                    <Col lg={7} className="center">
                        <UserList userList={this.state.users}/>
                    </Col>
                </Row>
            </Container>
        )
    }

}


export default Users;