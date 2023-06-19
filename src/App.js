import React from 'react';
import MainPage from "./pages/mainpage";
import DetailPage from "./pages/detailpage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/detail/:detail" component={DetailPage} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
