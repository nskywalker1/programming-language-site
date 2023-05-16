import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import PostItem from "./PostItem";
import {deletePost} from "../http/postAPI";
import {POST_ROUTE} from "../utils/consts";
import {useNavigate} from 'react-router-dom'

const PostList = observer(() => {
    const {post} = useContext(Context);
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const removePost = (postId) => {
        deletePost(postId)
            .then(data => {
                navigate(POST_ROUTE);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Container>
            {post.posts.length ?
                post.posts
                        .map((post) => (
                            <PostItem key={post.id} post={post} remove={removePost} />
                        ))
                        :
                <h1 style={{color: 'red', display: 'center'}} >No posts on the page</h1>
            }
        </Container>

    );
});

export default PostList;