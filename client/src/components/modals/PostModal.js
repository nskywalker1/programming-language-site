import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchLanguages} from "../../http/languageAPI";
import {Modal, Form, Button} from "react-bootstrap"
import {createPost} from "../../http/postAPI";

const PostModal = observer(({show, onHide}) => {

    const {languages} = useContext(Context)
    const {post} = useContext(Context)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)

    useEffect(() => {
        fetchLanguages().then(data => languages.setLanguages(data))
    }, [])

    const addPost = () => {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            createPost(formData).then(data => onHide())
            setTitle('')
            setDescription('')
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" >Create new post</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Enter title"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea"
                            placeholder="Enter description"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} >Close</Button>
                <Button onClick={() => addPost()} >Create</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default PostModal;