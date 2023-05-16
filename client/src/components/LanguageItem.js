import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LANGUAGE_ROUTE} from "../utils/consts";
import {Card, Col, Image, Row} from "react-bootstrap";

const LanguageItem = ({language}) => {

    const navigate = useNavigate()
    const id = language.id;


    return (
        <Row key={language.id} className="language-row">
            <Col xs={12}>
                <Card style={{marginTop: '10px', cursor: 'pointer'}} onClick={() => navigate(LANGUAGE_ROUTE + '/' + id)}  >
                    <Card.Body>
                        <Row>
                            <Col xs={3}>
                                <div className="language-image">
                                    <Image width={70} height={70} src={process.env.REACT_APP_API_URL + language.img}/>
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Card.Title>{language.name}</Card.Title>
                                <Card.Text>Rating: {language.rating}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default LanguageItem;