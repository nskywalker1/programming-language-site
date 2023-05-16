import {
    LANGUAGE_ROUTE,
    LOGIN_ROUTE,
    ADMIN_ROUTE,
    POST_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Languages from "./pages/Languages";
import Auth from "./pages/Auth";
import LanguagePage from "./pages/LanguagePage";
import PostPage from "./pages/PostPage";
import Posts from "./pages/Posts";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: LANGUAGE_ROUTE,
        Component: Languages
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: LANGUAGE_ROUTE + '/:id',
        Component: LanguagePage
    },
    {
        path: POST_ROUTE + '/:id',
        Component: PostPage
    },
    {
        path: POST_ROUTE,
        Component: Posts
    },
]

