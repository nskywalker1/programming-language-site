import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";

export const createPost = async (post) => {
    const {data} = await $authHost.post('api/post', post)
    return data
}

export const fetchPosts = async (page, limit = 5) => {
    const {data} = await $host.get('api/post', )
    return data
}

export const fetchOnePost = async (id) => {
    const {data} = await $host.get('api/post/' + id)
    return data
}

export const deletePost = async (id) => {
    const {data} = await $authHost.delete('api/post/' + id)
    return data
}