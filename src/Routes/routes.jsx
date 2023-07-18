import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/Login/login";
import Home from '../Components/Home';
import AuthLayout from "../Layout/AuthLayout/index";
// import ForgetPassword from "../Pages/Auth/Forget/ForgetPassword";
import NotFound from "../Pages/NotFound";


const routes = [
  {
    path: "/",
    layout: AuthLayout,
    component: Login,
  },
  // {
  //   path: "/forget-Password",
  //   layout: AuthLayout,
  //   component: ForgetPassword,
  // },

  { path: "/home", component: Home, layout: MainLayout },
  // {
  //   path: "/user",
  //   layout: MainLayout,
  //   subRoutes: [
  //     {
  //       path: "/",
  //       component: User,
  //     },
  //     {
  //       path: "/profile",
  //       component: Profile,
  //     },
  //   ],
  // },
  { path: "*", component: NotFound, layout: MainLayout },
];

export default routes;
