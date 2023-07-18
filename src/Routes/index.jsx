// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import routes from "./routes";
// import Sidebar from "../Components/Sidebar/Sidebar";
// import Login from "../Pages/Auth/Login/login";
// // import { Box } from "@material-ui/core";
// // import ForgetPassword from "../Pages/Auth/Forget/ForgetPassword";

// const ClientRoutes = () => {
//   return (
//     <BrowserRouter>
//       {/* <Switch> */}
//         <Route exact path="/">
//           <Login />
//         </Route>
//         {/* <Route exact path="/forget-Password">
//           <ForgetPassword />
//         </Route> */}
//         <Route>
//           <>
//             <Sidebar />
//             {/* <Switch> */}
//               {/* <div sx={{ padding: "0 20px 0 328px" }}> */}
//               <div>
//                 {routes.map((route, index) => {
//                   const { path, subRoutes, component, layout } = route;
//                   if (subRoutes && subRoutes.length > 0) {
//                     return (
//                       <Route key={`route_${index}`}>
//                         {subRoutes.map((subRoute, subIndex) => {
//                           return (
//                             <Route
//                               key={`subroute_${subIndex}`}
//                               exact
//                               path={`${route.path}${subRoute.path}`}
//                               component={subRoute.component}
//                               layout={layout}
//                             />
//                           );
//                         })}
//                       </Route>
//                     );
//                   }
//                   return (
//                     <Route
//                       key={`route_${index}`}
//                       exact
//                       path={path}
//                       component={component}
//                       layout={layout}
//                     />
//                   );
//                 })}
//               </div>
//               {/* <Redirect to="/" /> */}
//             {/* </Switch> */}
//           </>
//         </Route>
//       {/* </Switch> */}
//     </BrowserRouter>
//   );
// };

// export default ClientRoutes;
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import ElementControl from "../Components/ElementControl";

const ClientRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const { path, subRoutes, component, layout } = route;
          if (subRoutes && subRoutes.length > 0) {
            return (
              <Route key={`route_${index}`}>
                {subRoutes.map((subRoute, subIndex) => {
                  return (
                    <Route
                      key={`subroute_${subIndex}`}
                      exact
                      path={`${route.path}${subRoute.path}`}
                      element={<ElementControl Component={subRoute.component} Layout={layout} />}
                    />
                  );
                })}
              </Route>
            );
          }
          return (
            <Route
              key={`route_${index}`}
              exact
              path={path}
              element={<ElementControl Component={component} Layout={layout} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default ClientRoutes;
