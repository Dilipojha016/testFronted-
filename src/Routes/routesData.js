import loadable from "@loadable/component";
import routeRules from "./routeRules";
const routesData = [
  {
    path: routeRules.landingPage,
    component: loadable(() => import("../Container/Login")),
    auth: false,
    exact: true,
  },
  {
    path: routeRules.singup,
    component: loadable(() => import("../Container/singup")),
    auth: false,
    exact: true,
  },
 
  {
    path: routeRules.dashboard,
    component: loadable(() => import("../Container/DashBoard")),
    auth: true,
    exact: true,
  }, 
  {
    path: routeRules.items,
    component: loadable(() => import("../Container/ItemManagement")),
    auth: true,
    exact: true,
  },
  {
    path: routeRules.addItem,
    component: loadable(() => import("../Container/ItemManagement/addItem")),
    auth: true,
    exact: true,
  }
  
  
  
  
   
   
 
 
];

export default routesData;
