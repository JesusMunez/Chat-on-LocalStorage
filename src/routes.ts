import Chat from "./components/Chat";
import Login from "./components/Login";

export const publicRoutes = [
    {
        path: '/login',
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: '/chat',
        Component: Chat
    }
]