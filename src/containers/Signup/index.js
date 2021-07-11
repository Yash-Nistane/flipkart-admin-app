import React, { useState,useEffect} from "react";
import Layout from "../../components/Layout";
import { Form,Container,Row,Col ,Button} from "react-bootstrap";
import Input from "../../components/UI/Input";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";

/**
* @author
* @function Signup

**/

const Signup = (props) => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const auth = useSelector(state =>state.auth);
const user = useSelector(state =>state.user);
const dispatch = useDispatch();


useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);

const userSignup = (e) => {

    e.preventDefault();

    const user = {firstName, lastName, email, password};
    // console.log(user);
    
    dispatch(signup(user));

}

if(auth.authenticate){
    return <Redirect to={'/'}/>
}

if(user.loading){
    return <p>Loading...!</p>
}
  return (
    <div>
      <Layout>
        <Container>
            {user.message}
            <Row style={{marginTop:"50px"}}>
                <Col md={{span:6,offset:3}}>
                    <Form onSubmit={userSignup}>

                        <Row>
                            <Col md={6}>
                                <Input
                                    label="First Name"
                                    placeholder = "First Name"
                                    value = {firstName}
                                    type = "text"
                                    onChange = {(e)=>setFirstName(e.target.value)} 
                                />
                            </Col>

                            <Col md={6}>
                                <Input
                                    label="Last Name"
                                    placeholder = "Last Name"
                                    value = {lastName}
                                    type = "text"
                                    onChange = {(e)=>setLastName(e.target.value)} 
                                />
                            </Col>
                        </Row>
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
  );
};

export default Signup;
