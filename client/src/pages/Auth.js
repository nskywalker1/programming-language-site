import React, {useContext, useState} from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useLocation, NavLink, useNavigate} from 'react-router-dom'
import {LANGUAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if(isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(LANGUAGE_ROUTE)
        } catch (e) {
            alert(e.response.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600, borderColor: 'cyan'}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Autorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                <Form.Control
                    className="mb-3"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                  <Form.Control
                      className="mb-3"
                      placeholder="Enter your password..."
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type={"password"}
                  />
                  <Row className="d-flex justify-content-between mt-3 pl-3 pr-3" >
                      {isLogin ?
                        <div>
                            No account? <NavLink to={REGISTRATION_ROUTE} >Sign up!</NavLink>
                        </div>
                          :
                          <div>
                              Got an account?<NavLink to={LOGIN_ROUTE} >Log in!</NavLink>
                          </div>
                      }
                      <Button
                          variant={"outline-success"}
                          onClick={click}
                      >
                          {isLogin ? 'Log in' : 'Sign up'}
                      </Button>
                  </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;