import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route,} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../Footer";
import Login from "./Login";


function App () {
  return (
    <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services/>
        </Route>
        <Route exact path="/contact-us">
          <Contact/>
        </Route>
        <Route exact path="/portfolio">
          <Portfolio/>
        </Route>
        <Route exact path="/footer">
          <Footer/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
    <Footer />
  </div>
  );
}

export default App;
