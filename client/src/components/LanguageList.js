import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import LanguageItem from "./LanguageItem";

const LanguageList = observer(() => {
    const {languages} = useContext(Context);

    const sortedLanguages = [...languages.languages];
    const navigate = useNavigate()

    return (
        <Container>
            {sortedLanguages
                .sort((a, b) => a.rating - b.rating)
                .map((language) => (
                    <LanguageItem key={language.id} language={language} />
                ))}
        </Container>
    );
});

export default LanguageList;