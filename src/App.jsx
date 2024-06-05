import { Fragment } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default App;
