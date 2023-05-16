import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANGUAGE_ROUTE, POST_ROUTE } from "../utils/consts";
import { Card, Col, Image, Row, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const PostItem = observer(({ post, remove }) => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const  userObj = user.user

    const removePost = (post) => {
        const postId = post.id
        remove(postId)
    }

    return (
        <Row key={post.id} className="language-row">
            <Col xs={12}>
                <Card style={{ borderColor: 'cyan', marginTop: '10px', cursor: 'pointer' }} onClick={() => navigate(POST_ROUTE + '/' + post.id)}>
                    <Card.Body>
                        <Row>
                            <Col xs={9}>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.description.slice(0, 100)}</Card.Text>
                            </Col>
                            <Col xs={3} className="text-right">
                                {userObj.role === 'ADMIN' ?
                                    <Button variant="danger"  onClick={() => removePost(post)} >Delete</Button>
                                    :
                                    <div></div>
                                }
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
});

export default PostItem;