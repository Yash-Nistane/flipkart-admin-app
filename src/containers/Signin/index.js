import React,{useState} from 'react';
import Layout from '../../components/Layout';
import Input from "../../components/UI/Input";
import { Form,Container,Row,Col ,Button} from "react-bootstrap";
import {login} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

/**
* @author
* @function Signin

**/

const Signin= (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

        const userLogin = (e) => {

        e.preventDefault();
        const user = {
            email,
            password
        }

        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Redirect to={'/'}/>
    }
  return(
    <div>
        <Layout>
        <Container>
            <Row style={{marginTop:"50px"}}>
                <Col md={{span:6,offset:3}}>
                    <Form onSubmit = {userLogin}>
                        <Input
                                label="Email"
                                placeholder = "Email"
                                value = {email}
                                type = "email"
                                onChange = {(e)=>setEmail(e.target.value)} 
                            />
                            <Input
                                label="Password"
                                placeholder = "Password"
                                value = {password}
                                type = "password"
                                onChange = {(e)=>setPassword(e.target.value)} 
                            />

                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </Layout>
    </div>
   )

 }

export default Signin
