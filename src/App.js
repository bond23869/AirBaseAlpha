import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, ONas, Storitve, Kontakt, Poligoni,Oprema,Pravilnik } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <ONas />} />
          <Route path="/storitve" exact component={() => <Storitve />} />
          <Route path="/oprema" exact component={() => <Oprema />} />
          <Route path="/poligoni" exact component={() => <Poligoni />} />
          <Route path="/pravilnik" exact component={() => <Pravilnik />} />
          <Route path="/kontakt" exact component={() => <Kontakt />} />
          
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;