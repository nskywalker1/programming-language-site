import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import LanguageStore from './store/LanguageStore';
import PostStore from './store/PostStore';


export const Context = React.createContext(null);

const Root = () => {
    return (
        <Context.Provider
            value={{
                user: new UserStore(),
                languages: new LanguageStore(),
                post: new PostStore()
            }}
        >
            <App />
        </Context.Provider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);



