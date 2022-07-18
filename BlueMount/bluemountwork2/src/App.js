import { message } from "antd";
import { useRoutes, HashRouter } from "react-router-dom";
import route from "./utils/route";

message.config({
  top: 30,
  maxCount: 3,
});

const Index = () => {
  const element = useRoutes(route);
  return <div className="app">{element}</div>;
};


const App = () => (
    <HashRouter>
      <Index />
    </HashRouter>
);

export default App;
