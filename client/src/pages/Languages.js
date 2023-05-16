import React, {useContext, useEffect} from 'react';
import LanguageList from "../components/LanguageList";
import {Context} from "../index";
import {fetchLanguages} from "../http/languageAPI";

const Languages = () => {

    const {languages} = useContext(Context)

    useEffect(() => {
        fetchLanguages().then(data => languages.setLanguages(data))
    }, [])

    return (
        <div>
            <LanguageList />
        </div>
    );
};

export default Languages;