import Home from "~/pages/Home";
import Following from "~/pages/Following";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/", component: Following },
];
const privateRotes = [];

export { publicRoutes, privateRotes };
