import { Fragment } from "react";
import Landing from "./components/layout/Landing";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Landing />
      <Footer />
    </Fragment>
  );
};

export default App;
