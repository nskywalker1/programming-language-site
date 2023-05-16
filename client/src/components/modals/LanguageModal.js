import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchLanguages, updateRating} from "../../http/languageAPI";
import {Button, Form, Image, Modal} from "react-bootstrap";

const LanguageModal = observer(({show, onHide}) => {

    const {languages} = useContext(Context)
    const [rating, setRating] = useState(0)
    const ratings = [1,2,3,4,5,6,7,8,9,10]
    const [language, setLanguage] = useState('')

    useEffect(() => {
        fetchLanguages().then(data => languages.setLanguages(data))
    }, [])

    const newRating = () => {
        console.log(rating)
        updateRating(language, rating).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Update Rating</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form size="lg">
                    <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option disabled value="">Select a language</option>
                        {languages.languages.map((language) => (
                            <option key={language.id} value={language.id}>{language.name} - {language.rating}</option>
                        ))}
                    </Form.Select>
                        <Form.Select style={{marginLeft: '20px'}} value={rating} onChange={(e) => setRating(e.target.value)}>
                            <option  disabled value="">Select a rating</option>
                            {ratings.map((rat) => (
                                <option key={rat} value={rat}>{rat}</option>
                            ))}
                        </Form.Select>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={newRating} >Update</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default LanguageModal;