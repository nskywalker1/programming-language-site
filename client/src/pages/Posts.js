import React, { useContext, useEffect } from 'react';
import PostList from "../components/PostList";
import { fetchPosts } from "../http/postAPI";
import { Context } from "../index";

const Posts = () => {
    const { post } = useContext(Context);

    useEffect(() => {
        fetchPosts().then(data => {
            post.setPosts(data)
        });
    }, []);

    return (
        <div>
            <PostList />
        </div>
    );
};

export default Posts;