import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";

export const updateRating = async (id, rating) => {
    try {
        const { data } = await $authHost.put('api/language/' + id, { rating });
        return data;
    } catch (e) {
        console.log(e)
    }
};

export const fetchLanguages = async () => {
    const {data} = await $host.get('api/language')
    return data
}

export const fetchOneLanguage = async (id) => {
    try{
        const {data} = await $host.get('api/language/' + id)
        return data
    }catch (e) {
        console.log(e)
    }
}