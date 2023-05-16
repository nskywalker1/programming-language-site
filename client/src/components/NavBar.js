import React, {useContext, UseContext} from 'react';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from "react-bootstrap/Navbar";
import {NavLink, useNavigate} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {LANGUAGE_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE, POST_ROUTE} from "../utils/consts";
import {Button} from 'react-bootstrap'

const NavBar = observer(() => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink to={LANGUAGE_ROUTE}>TopIT</NavLink>
                {user.isAuth ? (
                    <>
                        <Nav className="me-auto">
                            <Button
                                variant={"outline-info"}
                                onClick={() => navigate(LANGUAGE_ROUTE)}
                                style={{marginLeft: '4px'}}
                            >Languages</Button>
                            <Button
                                variant={"outline-info"}
                                onClick={() => navigate(POST_ROUTE)}
                                style={{marginLeft: '10px'}}
                            >Posts</Button>
                        </Nav>
                        <Nav>
                            <Button
                                variant={"outline-info"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Admin
                            </Button>
                            <Button
                                variant={"outline-danger"}
                                onClick={() => logOut()}
                                style={{marginLeft: '12px'}}
                            >
                                Quit
                            </Button>
                        </Nav>
                    </>
                ) : (
                    <>
                        <Nav className="me-auto">
                            <Button
                                variant={"outline-info"}
                                style={{marginRight: '12px'}}
                                onClick={() => navigate(LANGUAGE_ROUTE)}
                            >Languages</Button>
                            <Button
                                variant={"outline-info"}
                                onClick={() => navigate(POST_ROUTE)}
                            >Posts</Button>
                        </Nav>
                        <Nav>
                            <Button
                                variant={"outline-info"}
                                style={{marginRight: '12px'}}
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >Login</Button>
                        </Nav>
                    </>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;