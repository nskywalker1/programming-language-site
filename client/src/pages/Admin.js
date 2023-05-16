import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container} from "react-bootstrap";
import PostModal from "../components/modals/PostModal";
import LanguageModal from "../components/modals/LanguageModal";



const Admin = () => {

    const [postVisible, setPostVisible] = useState(false)
    const [languageVisible, setLanguageVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setPostVisible(true)}
            >
                Create new post
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setLanguageVisible(true)}
            >
                Update rating
            </Button>
            <PostModal show={postVisible} onHide={() => setPostVisible(false)} />
            <LanguageModal show={languageVisible} onHide={() => setLanguageVisible(false)} />
        </Container>
    );
};

export default Admin;