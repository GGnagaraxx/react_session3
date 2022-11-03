import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LabeledText from "../../../common/components/LabeledText";


class UserList extends React.Component{



    render(){
        
        return(
            <Box 
                className="userList-comp cust-box"
                component='div'>
                <Typography 
                    className="txt-center comp-title"
                    variant='h1' 
                    component='div'>
                        Users
                </Typography>
                <Container>
                    {this.props.userList.length ? 
                        <Row>
                            {
                                this.props.userList.map((user, index) => {
                                    console.log("List User:", user)
                                    return(
                                        <Col className='user-col' key={user.name + index} xl={6} lg={12} md={6} xs={12} >
                                            <Card className="user-card">
                                                <div className='card-content'>
                                                    <CardContent>
                                                        <Typography 
                                                            className="user-title"
                                                            gutterBottom 
                                                            variant='h5' 
                                                            component='div'>
                                                            {user.name}
                                                        </Typography>
                                                        <LabeledText 
                                                            label={'Date of Birth: '}   
                                                            text={user.dob.toDateString()}
                                                            labelVariant='div'
                                                            textVariant='body2' 
                                                        />
                                                        <LabeledText 
                                                            label={'Email: '}   
                                                            text={user.email}
                                                            labelVariant='div'
                                                            textVariant='body2' 
                                                        />
                                                        <LabeledText 
                                                            label={'Contact Number: '}   
                                                            text={user.contactNum}
                                                            labelVariant='div'
                                                            textVariant='body2' 
                                                        />
                                                        <Box 
                                                            className="desc-box cust-box"
                                                            component='div'>
                                                            <LabeledText 
                                                                label={'About ' + user.name}   
                                                                text={user.desc}
                                                                labelVariant='div'
                                                                textVariant='body2' 
                                                                multiline
                                                            />
                                                        </Box>
                                                    </CardContent>
                                                </div>
                                                <div className='btm-overflow-cover'></div>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    : null}
                </Container>
            </Box>
        )
    }
}


export default UserList;