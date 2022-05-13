import { Header } from "components/molecules";
import AppStyled from "./App.styled";
import Home from "containers/Home/Home";
import Skills from "containers/Skills/Skills";
import "assets/css/app.css";
import { Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { Switch } from "react-router-dom";
import { DarkModContext } from "context/DarkModContext";
import { useContext } from "react";

const App = () => {
  const { isDarkMode } = useContext(DarkModContext);
  return (
    <AppStyled light={!isDarkMode ? true : false}>
      <Header />
      <WavyContainer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Home} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/recent-work" exact component={Home} />
        <Route path="/contact" exact component={Home} />
      </Switch>
    </AppStyled>
  );
};

export default App;