import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    console.log(user)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            {publicRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/" element={<Navigate to="/language" />} />
        </Routes>
    );
});

export default AppRouter;