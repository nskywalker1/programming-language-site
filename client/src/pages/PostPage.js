import React, {useEffect, useState} from 'react';
import PostList from "../components/PostList";
import {useParams} from "react-router-dom";
import {fetchOnePost} from "../http/postAPI";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const PostPage = () => {

    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchOnePost(id).then(data => setPost(data))
    }, [])

    return (
        <Container>
            <Card className="mt-4" style={{borderColor: 'cyan'}}>
                <Card.Body>
                    <Card.Title className="mt-4 text-center">{post.title}</Card.Title>
                    <Card.Text className="text-center">{post.description}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PostPage;