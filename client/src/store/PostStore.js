import {makeAutoObservable} from "mobx";


export default class PostStore{
    constructor() {
        this._posts = []
        makeAutoObservable(this)
    }

    setPosts(posts){
        this._posts = posts
    }

    setPage(page){
        this._page = page
    }

    get posts(){
        return this._posts
    }
}