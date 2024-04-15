import { DashboardPage } from "./pages/dasboard";
import { Auth } from "./pages/auth/AuthPages";

const routes = [
    {path: '/auth', element: <Auth/>},
    {path: '/*', element: <DashboardPage/>},
];

export default routes;