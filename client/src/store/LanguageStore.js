import {makeAutoObservable} from 'mobx'


export default class LanguageStore{
    constructor() {
        this._types = []
        this._languages = []
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setLanguages(languages){
        this._languages = languages
    }

    get types(){
        return this._types
    }

    get languages(){
        return this._languages
    }
}