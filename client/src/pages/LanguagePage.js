import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneLanguage } from "../http/languageAPI";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const LanguagePage = () => {
    const [language, setLanguage] = useState({});
   const { id } = useParams();


    useEffect(() => {
            fetchOneLanguage(id).then(data => setLanguage(data));
    }, [id]);

    return (
        <Container>
            <Card className="mt-4">
                <Card.Body>
                    <div className="text-center">
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + language.img} alt={language.name} />
                    </div>
                    <Card.Title className="mt-4 text-center">{language.name}</Card.Title>
                    <Card.Text className="text-center">{language.description}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LanguagePage;